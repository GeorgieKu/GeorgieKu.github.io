import gulp from 'gulp';
import sass from 'gulp-sass';
import sassCompiler from 'sass';  // Импортируем компилятор
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import { deleteSync } from 'del'

// Инициализация
const browserSyncInstance = browserSync.create();

// Пути к файлам
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.{jpg,png,gif,svg}',
    svg: 'src/img/svg/**/*.svg',
    fonts: 'src/fonts/**/*.woff2',
    html: 'src/**/*.html',
    dist: 'dist/'
};

// Теперь указываем компилятор для gulp-sass
const sassCompiled = sass(sassCompiler);

// Компиляция SCSS в единый style.min.css
function styles() {
    return gulp.src(paths.scss)
        .pipe(sassCompiled().on('error', sassCompiled.logError))  // Используем компилятор
        .pipe(autoprefixer({ cascade: false }))  // Добавляем префиксы
        .pipe(cleanCSS({ level: 2 }))  // Минифицируем CSS
        .pipe(concat('style.min.css'))  // Объединяем в один файл
        .pipe(gulp.dest(paths.dist + 'css'))  // Сохраняем в папку dist
        .pipe(browserSyncInstance.stream()); // Обновляем страницу
}

// Минификация и объединение JS
function scripts() {
    return gulp.src(paths.js)
        .pipe(concat('script.min.js'))  // Объединяем скрипты
        .pipe(uglify())  // Минифицируем
        .pipe(gulp.dest(paths.dist + 'js'))  // Сохраняем в папку dist
        .pipe(browserSyncInstance.stream());
}

// Оптимизация изображений
function images() {
    return gulp.src(paths.img)
        .pipe(imagemin())  // Оптимизируем изображения
        .pipe(gulp.dest(paths.dist + 'img'));  // Сохраняем в папку dist
}

// Генерация SVG-спрайта
function svgSprite() {
    return gulp.src(paths.svg)
        .pipe(cheerio({
            run: function ($) {
                $('[fill], [stroke]').removeAttr('fill stroke'); // Удаляем ненужные атрибуты
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore({ inlineSvg: true }))  // Генерируем спрайт
        .pipe(gulp.dest(paths.dist + 'img'));
}

// Минификация HTML
function html() {
    return gulp.src(paths.html)
        .pipe(htmlmin({ collapseWhitespace: true }))  // Минифицируем HTML
        .pipe(gulp.dest(paths.dist))  // Сохраняем в папку dist
        .pipe(browserSyncInstance.stream());
}

function fonts() {
    return gulp.src(paths.fonts, { since: gulp.lastRun(fonts), nodir: true, buffer: false }) 
        .pipe(gulp.dest(paths.dist + 'fonts')); 
}

// Очистка папки dist перед сборкой
function clean(done) {
    deleteSync([paths.dist]);  // Используем deleteSync для удаления
    done();  // Явно сигнализируем о завершении
}

// Запуск сервера и слежение за изменениями
function serve() {
    browserSyncInstance.init({
        server: { baseDir: paths.dist }
    });

    gulp.watch(paths.scss, styles);
    gulp.watch(paths.js, scripts);
    gulp.watch(paths.img, images);
    gulp.watch(paths.svg, svgSprite);
    gulp.watch(paths.html, html);
    gulp.watch(paths.html).on('change', browserSyncInstance.reload);
}

// Задачи
export { clean, styles, scripts, images, svgSprite, html, fonts, serve };

// Обновим экспорт по умолчанию, добавив шрифты в сборку
export default gulp.series(clean, gulp.parallel(styles, scripts, images, svgSprite, html, fonts), serve);