# 🎨 Guia de Personalização

Se quiser fazer alterações na página, aqui estão os principais pontos:

## 📝 Textos Personalizáveis

### No `script.js`:

**Frases que aparecem flutuando:**
```javascript
const frases = [
  "Você é minha paz.",
  "O nosso amor é certeza.",
  // Adicione mais frases aqui
];
```

**Frases de amor fixas:**
```javascript
const frasesAmorFixas = [
  "Te amo com todas as cores do arco-íris!",
  // Adicione mais frases aqui
];
```

### Na data do casamento (se mudar):
```javascript
const casamento = new Date('2025-12-02T00:00:00');
// Mude para a data desejada
```

## 🎨 Cores e Estilos

### No `style.css` ou dentro de `<style>` no HTML:

**Cores principais:**
- Primary Pink: `#ff69b4`
- Dark Pink: `#ff1493`
- Light Pink: `#c71585`
- Background: `#fff0f5`

**Para mudar cores, procure por:**
```css
background: #ff69b4;  /* Mude para sua cor */
color: #ff1493;       /* Mude para sua cor */
```

## 🖼️ Imagens

Adicione suas fotos na pasta `fotos/`:
1. Copie imagens para a pasta
2. Update no `script.js`:
```javascript
const imagens = [
  'fotos/sua-foto-1.jpg',
  'fotos/sua-foto-2.jpg',
  // etc
];
```

## 🎬 Vídeo

Para trocar o vídeo, edite no `index.html`:
```html
<source src="fotos/SEU-VIDEO.mp4" type="video/mp4">
```

## 📱 Responsividade

Se precisar ajustar tamanhos para mobile, procure por:
```css
@media (max-width: 768px) {
  /* Aqui estão os ajustes para tablet */
}

@media (max-width: 480px) {
  /* Aqui estão os ajustes para celular */
}
```

## ⚡ Velocidade de Animações

**Para acelerar ou desacelerar efeitos:**

Pétalas:
```javascript
setInterval(criarPetala, 900);  // Em milissegundos
```

Corações:
```javascript
setInterval(criarCoracao, 800);
```

Carrossel:
```javascript
}, 3000);  // Troca de foto a cada 3 segundos
```

Frases:
```javascript
}, 6000);  // Mostrar frase a cada 6 segundos
```

## 🎵 Adicionar Música

Se quiser adicionar música de fundo:
1. Coloque o arquivo na pasta `musicas/`
2. Adicione no HTML:
```html
<audio id="musica-fundo" autoplay loop style="display:none;">
  <source src="musicas/sua-musica.mp3" type="audio/mpeg">
</audio>
```

## 🎯 Dicas de Customização

1. **Título da página**: Mude em `<title>` no HTML
2. **Nome na aba 3**: Personalize a assinatura
3. **Datas**: Atualize datas importantes
4. **Nomes dos meses**: Personalize os 5 capítulos
5. **Mensagens**: Substitua textos por suas próprias palavras

## 🌈 Efeitos Especiais

Para **remover** um efeito:
- Comente a linha com `//` no JavaScript
- Exemplo: `// setInterval(criarPetala, 900);`

Para **adicionar** frequência de um efeito:
- Diminua o número em `setInterval(..., NÚMERO_AQUI)`
- Exemplo: `900` para `500` = mais rápido

## 🚀 Enviar para a Web

1. Use um serviço como **Netlify** ou **GitHub Pages**
2. Ou compartilhe como arquivo HTML diretamente
3. Ou faça upload em um servidor web

## ❓ Dúvidas Comuns

**P: Como mudo a cor de fundo?**
R: Procure por `background:` no CSS e altere o valor da cor

**P: Como faço a página carregar em outra aba?**
R: No final do script.js, mude `showTab(2)` para `showTab(0)`, `showTab(1)` ou `showTab(2)`

**P: Como removo a abelhinha?**
R: Comente `criarAbelhinha();` no JavaScript

**P: Posso mudar as frases?**
R: Sim! Edite os arrays `frases` e `frasesAmorFixas` no script.js

---

**Aproveite a personalização e deixe sua marca nesta página especial! 💕**
