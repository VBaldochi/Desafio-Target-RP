# Desafio Target RP

---

## 1. Verificador de Sequência de Fibonacci em Node.js.

### Código em Node.js

```javascript
function fibonacciChecker(num) {
  let a = 0, b = 1, temp;

  while (b <= num) {
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci!`;
    }
    temp = a + b;
    a = b;
    b = temp;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso com entrada do usuário
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe um número: ', (num) => {
  console.log(fibonacciChecker(parseInt(num)));
  readline.close();
});
```

**Observação:** Utilizei o módulo `readline` para receber a entrada do usuário via console.

---

## 2. Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. 

### Código em Node.js

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string: ', (userInput) => {
  const lowerCaseInput = userInput.toLowerCase();
  const count = (lowerCaseInput.match(/a/g) || []).length;

  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não foi encontrada na string.");
  }

  rl.close();
});
```

---

## 3. Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); 

#### Ao final do processamento, qual será o valor da variável SOMA? 

### Cálculo

A fórmula utilizada para calcular a soma dos números de uma progressão aritmética é:

```makefile

SOMA = (primeiro_termo + último_termo) * número_de_termos / 2

Substituindo os valores:

SOMA = (1 + 13) * 13 / 2 = 91

```

**Resposta:** O valor final da variável `SOMA` será 91.

---

## 4. Descubra a lógica e complete o próximo elemento:

### Sequências:

a) **1, 3, 5, 7, 9**  
Próximo número: **11**  
**Lógica:** Sequência de números ímpares.

b) **2, 4, 8, 16, 32, 64, 128**  
Próximo número: **256**  
**Lógica:** Sequência de potências de 2 (2^1, 2^2, 2^3...).

c) **0, 1, 4, 9, 16, 25, 36, 49**  
Próximo número: **64**  
**Lógica:** Sequência dos quadrados dos números inteiros (0^2, 1^2, 2^2...).

d) **4, 16, 36, 64, 100**  
Próximo número: **144**  
**Lógica:** Sequência dos quadrados dos números pares (2^2, 4^2, 6^2...).

e) **1, 1, 2, 3, 5, 8, 13**  
Próximo número: **21**  
**Lógica:** Sequência de Fibonacci, onde cada número é a soma dos dois anteriores.

f) **2, 10, 12, 16, 17, 18, 19, 200**  
Próximo número: **1000**  
**Lógica:** Sequência de números que começam com a letra "d" quando escritos por extenso em português (dois, dez, doze...).

---

## 5. O Enigma dos Interruptores e Lâmpadas

### Solução:

1. **Ligue o interruptor 1 e deixe-o ligado por alguns minutos.** Isso aquecerá a lâmpada correspondente.
2. **Desligue o interruptor 1 e ligue o interruptor 2.**
3. **Vá para a sala das lâmpadas.**

### Análise das Lâmpadas:

- **Lâmpada acesa:** Está conectada ao interruptor 2.
- **Lâmpada apagada, mas quente:** Está conectada ao interruptor 1.
- **Lâmpada apagada e fria:** Está conectada ao interruptor 3.

---

## Observações Finais

- Certifique-se de instalar o módulo `readline` em seu projeto Node.js utilizando o comando `npm install readline`, caso ainda não esteja instalado.
