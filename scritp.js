        let resultados = [];

        document.getElementById("calcularBtn").addEventListener("click", function() {
            let total = parseFloat(document.getElementById("totalCompra").value);
            let forma = document.getElementById("formaPagamento").value;

            if (isNaN(total) || total <= 0) {
                alert("Digite um valor válido.");
                return;
            }

            let valorFinal;
            let classeCard;

            if (forma === "dinheiro") {
                valorFinal = total * 0.9;
                forma = "Dinheiro/PIX";
                classeCard = "result-dinheiro";
            } else if (forma === "debito") {
                valorFinal = total * 0.95;
                forma = "Débito";
                classeCard = "result-debito";
            } else {
                valorFinal = total;
                forma = "Crédito";
                classeCard = "result-credito";
            }

            document.getElementById("resultado").textContent = "Valor final: R$ " + valorFinal.toFixed(2);

            let resultadoObj = {
                total: total.toFixed(2),
                forma: forma,
                final: valorFinal.toFixed(2)
            };

            resultados.push(resultadoObj);
            console.log("Novo resultado:", resultadoObj);

            atualizarLista();
        });

        document.getElementById("btnLimpar").addEventListener("click", function() {
            resultados = [];
            document.getElementById("listaResultados").innerHTML = "";
            document.getElementById("resultado").textContent = "";
            console.clear();
        });

        function atualizarLista() {
            let container = document.getElementById("listaResultados");
            container.innerHTML = "";
            resultados.forEach((res, index) => {
                let div = document.createElement("div");
                div.className = `result-card ${res.forma === "Dinheiro/PIX" ? "result-dinheiro" : res.forma === "Débito" ? "result-debito" : "result-credito"}`;
                div.textContent = `${index + 1}. Total: R$ ${res.total} | Forma: ${res.forma} | Valor Final: R$ ${res.final}`;
                container.appendChild(div);
            });
        }
    