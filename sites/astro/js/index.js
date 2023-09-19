currentChain = {}
    const chains = [
      {
        name: "Goerli",
        id: "0x5",
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://goerli.infura.io/v3/'],
        contract: "0x895061f3225cce71346115f700709c8039bdee91",
        comission: 0.001
      },
      {
        name: "zkSync Testnet",
        id: "0x118",
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://zksync-era-testnet.blockpi.network/v1/rpc/public'],
        contract: "0x677F1C8582F5203468Cd442DdCB7a3CB23e65979",
        comission: 0.001
      },
    ];
    const contractABI =
      [{ "inputs": [{ "internalType": "uint256", "name": "numberOfContracts", "type": "uint256" }], "name": "createContracts", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userToContracts", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawFromContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    const contractAddress = "0x895061f3225cCe71346115f700709c8039Bdee91"
    var web3 = new Web3(window.ethereum)
    var timerId;
    //const contract = new web3.eth.Contract(contractABI, contractAddress);

    window.ethereum.on('chainChanged', async function (accounts) {
      await checkChain();
    })
    $(document).ready(async function () {

      $("#pend").hide();
      $("#result").hide();

      await checkConnect();
      await checkChain();
      var id = await web3.eth.getChainId()
      var result = chains.find(obj => {
        return obj.id === web3.utils.toHex(id)
      })
      if (result === undefined)
        await changeChain(chains[0]);

      for (var i = 0; i < chains.length; i++) {
        var chain = chains[i];
        var chainItemHtml = $('<a class="dropdown-item" href="app.html#">' + chain.name + '</a>');
        chainItemHtml.data('chain', chain);
        chainItemHtml.on('click', async function () {
          var selectedChain = $(this).data('chain');
          await changeChain(selectedChain);
        });
        $("#chainsdd").append(chainItemHtml);
      }

      var $numField = $("#number");
      var $amountField = $("#amount");
      $numField.on("input", function () {
        var sourceValue = $numField.val();
        $amountField.val(parseInt(sourceValue) * 0.001 || 0);
      });
    });

    async function checkChain() {
        var id = await web3.eth.getChainId()
        var result = chains.find(obj => {
          return obj.id === web3.utils.toHex(id)
        })
        if (result) {
          currentChain = result;
          $("#dropdownMenuButton").html(result.name);
        }
      }
  
      async function checkConnect() {
        if (isLogged()) {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const userAddress = accounts[0];
          toggleConn(userAddress);
        }
      }
      function isLogged() {
        return getCookie("logged") === "true";
      }
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      function toggleConn(userAddress) {
        $("#scon").toggle();
        $("#hello").toggle();
        $("#inputs").toggle();
  
        $("#lab").text("Кошелёк " + userAddress);
      }
      function toggleDisc(userAddress) {
        $("#scon").toggle();
        $("#hello").toggle();
  
      }
      async function changeChain(chain) {
        const currentChainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        if (currentChainId == chain.id) return;
        if (window.ethereum) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: chain.id }],
            });
            currentChain = chain;
            $("#dropdownMenuButton").html(chain.name);
          } catch (error) {
            if (error.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: chain.id,
                      chainName: chain.name,
                      nativeCurrency: chain.nativeCurrency,
                      rpcUrls: chain.rpcUrls,
                    },
                  ],
                });
                currentChain = chain;
                $("#dropdownMenuButton").html(chain.name);
              } catch (addError) {
                console.error(addError);
              }
            }
            console.error(error);
          }
        } else {
          alert('Install Metamask https://metamask.io/download.html');
        }
      }

      async function connect() {
        if (typeof window.ethereum !== 'undefined') {
  
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
          const userAddress = accounts[0];
          var id = await web3.eth.getChainId()
          var result = chains.find(obj => {
            return obj.id === web3.utils.toHex(id)
          })
          if (result === undefined)
            await changeChain(chains[0]);
          document.cookie = "logged=true";
          toggleConn(userAddress);
        } else {
          console.log("No wallet");
        }
      }
  
      async function disconnect() {
        if (typeof window.ethereum !== 'undefined') {
          document.cookie = "logged=false";
          toggleConn();
        } else {
          console.log("No wallet");
        }
      }
      async function isPending(txHash) {
        $("#pend").text("(Pending)");
        $("#pend").show();
        try {
          var r = await web3.eth.getTransactionReceipt(txHash);
          if (r != null) {
            if (r.status == "1")
              $("#pend").text("(Completed)");
            else if (r.status == "0")
              $("#pend").text("(Failed)");
            clearInterval(timerId);
          }
          else $("#pend").hide();
        } catch (error) {
  
        }
  
      }
      async function send() {
        var id = await web3.eth.getChainId()
        var result = chains.find(obj => {
          return obj.id === web3.utils.toHex(id)
        })
        if (result === undefined)
          await changeChain(chains[0]);
  
        const payableAmount = document.getElementById("amount").value;
        const numberOfContracts = parseInt(document.getElementById('number').value);
        let contract = new web3.eth.Contract(contractABI, currentChain.contract);
        const transactionObject = {
          to: contractAddress,
          from: ethereum.selectedAddress,
          value: web3.utils.toHex(parseInt(web3.utils.toWei(payableAmount, 'ether'))),
          data: contract.methods.createContracts(numberOfContracts).encodeABI(),
        };
  
        try {
          const transactionHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionObject],
          });
          $("#result").attr("href", "https://goerli.etherscan.io/tx/" + transactionHash);
          $("#result").show();
          timerId = setInterval(async () => { await isPending(transactionHash) }, 1000);
        } catch (error) {
          $("#pend").show();
          $("#result").hide();
  
          $("#pend").text("REJECTED BY USER");
        }
      }

       // Получаем элементы кнопки и выпадающего меню
var button = document.getElementById("dropdownMenuButton");
var menu = document.getElementById("chainsdd");

// Добавляем обработчики событий
button.addEventListener("mouseover", function() {
  menu.classList.add("show"); // Добавляем класс "show" для отображения выпадающего меню
});

menu.addEventListener("mouseleave", function() {
  menu.classList.remove("show"); // Удаляем класс "show" для скрытия выпадающего меню
});

!function () { const e = "system"; function t(e) { "dark" === e ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") } function o(e, t, o) { const a = "string" == typeof e ? document.querySelectorAll(e) : e; a && a.length && a.forEach((e => { e.addEventListener(t, (t => o(t, e)), !1) })) } e && e.endsWith(":only") || (localStorage.theme, 0) ? t(e.replace(":only", "")) : "dark" === localStorage.theme || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? t("dark") : t("light"), window.onload = function () { let t = window.scrollY, a = !0; function d() { const e = document.getElementById("header"); t > 60 && !e.classList.contains("scroll") ? document.getElementById("header").classList.add("scroll") : t <= 60 && e.classList.contains("scroll") && document.getElementById("header").classList.remove("scroll"), a = !1 } o("#header nav", "click", (function () { document.querySelector("[data-aw-toggle-menu]")?.classList.remove("expanded"), document.body.classList.remove("overflow-hidden"), document.getElementById("header")?.classList.remove("h-screen"), document.getElementById("header")?.classList.remove("expanded"), document.getElementById("header")?.classList.remove("bg-page"), document.querySelector("#header nav")?.classList.add("hidden"), document.querySelector("#header > div > div:last-child")?.classList.add("hidden") })), o("[data-aw-toggle-menu]", "click", (function (e, t) { t.classList.toggle("expanded"), document.body.classList.toggle("overflow-hidden"), document.getElementById("header")?.classList.toggle("h-screen"), document.getElementById("header")?.classList.toggle("expanded"), document.getElementById("header")?.classList.toggle("bg-page"), document.querySelector("#header nav")?.classList.toggle("hidden"), document.querySelector("#header > div > div:last-child")?.classList.toggle("hidden") })), o("[data-aw-toggle-color-scheme]", "click", (function () { e.endsWith(":only") || (document.documentElement.classList.toggle("dark"), localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light") })), o("[data-aw-social-share]", "click", (function (e, t) { const o = t.getAttribute("data-aw-social-share"), a = encodeURIComponent(t.getAttribute("data-aw-url")), d = encodeURIComponent(t.getAttribute("data-aw-text")); let n; switch (o) { case "facebook": n = `https://www.facebook.com/sharer.php?u=${a}`; break; case "twitter": n = `https://twitter.com/intent/tweet?url=${a}&text=${d}`; break; case "linkedin": n = `https://www.linkedin.com/shareArticle?mini=true&url=${a}&title=${d}`; break; case "whatsapp": n = `https://wa.me/?text=${d}%20${a}`; break; case "mail": n = `mailto:?subject=%22${d}%22&body=${d}%20${a}`; break; default: return }const c = document.createElement("a"); c.target = "_blank", c.href = n, c.click() })), d(), o([document], "scroll", (function () { t = window.scrollY, a || (window.requestAnimationFrame((() => { d() })), a = !0) })) }, window.onpageshow = function () { document.documentElement.classList.add("motion-safe:scroll-smooth"); const e = document.querySelector("[data-aw-toggle-menu]"); e && e.classList.remove("expanded"), document.body.classList.remove("overflow-hidden"), document.getElementById("header")?.classList.remove("h-screen"), document.getElementById("header")?.classList.remove("expanded"), document.querySelector("#header nav")?.classList.add("hidden") } }()