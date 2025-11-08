# DefesaBot - WhatsApp Business Chatbot

🤖 **Chatbot inteligente para serviços da SEAGRI-DF (Secretaria de Agricultura, Abastecimento e Desenvolvimento Rural do Distrito Federal)**

## 📋 Descrição

O DefesaBot é um chatbot desenvolvido para WhatsApp Business que automatiza o atendimento aos serviços da SEAGRI-DF. O sistema oferece uma interface conversacional intuitiva para orientar usuários através de diversos processos burocráticos e serviços relacionados à agricultura e desenvolvimento rural.

## ✨ Funcionalidades

### 🎯 Serviços Principais
- **Licenciamento Ambiental** - Orientação sobre processos de licenciamento
- **Autorização Fitossanitária** - Emissão de autorizações para produtos fitossanitários
- **Registro de Propriedades** - Cadastramento de propriedades rurais
- **Controle de Pragas** - Informações sobre manejo integrado de pragas
- **Certificação Orgânica** - Processo de certificação para agricultura orgânica
- **Irrigação e Recursos Hídricos** - Autorizações para uso de recursos hídricos

### 🔧 Características Técnicas
- **Interface WhatsApp Business** - Design nativo do WhatsApp
- **Respostas Rápidas** - Botões de resposta rápida para navegação
- **Sistema de Conversação** - Fluxo conversacional estruturado
- **Links Diretos** - Acesso direto aos sistemas oficiais
- **QR Code** - Fácil compartilhamento do bot
- **Indicador de Digitação** - Feedback visual em tempo real
- **Persistência de Dados** - Armazenamento de conversas
- **Responsivo** - Adaptado para diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização com design do WhatsApp
- **JavaScript** - Lógica de conversação e interações
- **Data SDK** - Gerenciamento de dados e persistência
- **Element SDK** - Configurações de interface

## 📱 Como Usar

### Para Usuários
1. Acesse o DefesaBot através do link ou QR Code
2. Escolha o serviço desejado no menu principal
3. Siga as orientações do bot para seu processo
4. Clique nos links fornecidos para acessar sistemas oficiais
5. Use os botões de resposta rápida para navegar

### Menu Principal
```
🌾 Bem-vindo à SEAGRI-DF!

Como posso ajudá-lo hoje?

• 🛡️ Licenciamento Ambiental
• 🌱 Autorização Fitossanitária  
• 📋 Registro de Propriedades
• 🐛 Controle de Pragas
• 🌿 Certificação Orgânica
• 💧 Irrigação e Recursos Hídricos
```

## 🔧 Instalação e Configuração

### Pré-requisitos
- Servidor web compatível com HTML5
- Navegador moderno com suporte a JavaScript ES6+

### Configuração
1. **Clone ou baixe** o arquivo `DefesaBot.html`
2. **Configure os SDKs**:
   ```javascript
   // Os SDKs são carregados automaticamente
   <script src="/_sdk/data_sdk.js"></script>
   <script src="/_sdk/element_sdk.js"></script>
   ```

3. **Personalize as configurações** (opcional):
   ```javascript
   const defaultConfig = {
     user_bubble_color: '#dcf8c6',
     bot_bubble_color: '#ffffff',
     typing_delay: 1500
   };
   ```

### Estrutura de Arquivos
```
DefesaBot/
├── DefesaBot.html          # Aplicação principal
└── README.md              # Este arquivo
```

## 🎨 Personalização

### Cores da Interface
```css
/* Cores principais */
--whatsapp-green: #25d366;
--whatsapp-dark: #111b21;
--chat-bg: #efeae2;
--user-bubble: #dcf8c6;
--bot-bubble: #ffffff;
```

### Configuração de Serviços
Para adicionar novos serviços, edite a função `getMenuOptions()`:
```javascript
function getMenuOptions() {
  return [
    "🛡️ Licenciamento Ambiental",
    "🌱 Autorização Fitossanitária",
    // Adicione novos serviços aqui
    "🆕 Novo Serviço"
  ];
}
```

## 📊 Fluxo de Conversação

### Estrutura do Fluxo
1. **Boas-vindas** → Apresentação do bot
2. **Menu Principal** → Seleção de serviços
3. **Submenu** → Opções específicas do serviço
4. **Orientações** → Instruções detalhadas
5. **Links Oficiais** → Redirecionamento para sistemas

### Exemplo de Fluxo - Licenciamento Ambiental
```
Usuário: [Inicia conversa]
Bot: Bem-vindo à SEAGRI-DF! Como posso ajudá-lo?
Usuário: [Clica] Licenciamento Ambiental
Bot: Que tipo de licenciamento você precisa?
Usuário: [Clica] Licença de Operação
Bot: [Fornece orientações + link oficial]
```

## 🔒 Segurança

### Medidas Implementadas
- **Escape HTML** - Prevenção contra XSS
- **Sanitização** - Limpeza de entradas do usuário
- **Links seguros** - `rel="noopener noreferrer"`
- **Validação** - Verificação de dados de entrada

### Limitações
- Máximo de 999 mensagens por sessão
- Timeout de inatividade configurável
- Rate limiting para requisições

## 📈 Métricas e Monitoramento

### Dados Coletados
- **Mensagens enviadas/recebidas**
- **Serviços mais utilizados** 
- **Tempo de sessão**
- **Passos da conversação**
- **Taxa de conclusão**

### Estrutura de Dados
```javascript
{
  id: "msg_timestamp_random",
  text: "Conteúdo da mensagem",
  sender: "user|bot",
  timestamp: 1234567890,
  service_type: "licensing|phytosanitary|...",
  conversation_step: 1
}
```

## 🛠️ Manutenção

### Atualizações Frequentes
- **Revisão de links** - Verificar se URLs oficiais estão funcionais
- **Atualização de informações** - Manter dados atualizados com mudanças na legislação
- **Testes de fluxo** - Validar todos os caminhos de conversação

### Logs e Debug
```javascript
// Ativação de logs para debug
console.log('Conversation state:', currentConversation);
console.log('Messages count:', messages.length);
```

## 📞 Suporte e Contato

### Para Desenvolvedores
- **GitHub**: [Link do repositório]
- **Email**: suporte.defesabot@seagri.df.gov.br
- **Documentação**: [Link da documentação técnica]

### Para Usuários Finais
- **SEAGRI-DF**: (61) 3xxx-xxxx
- **Site Oficial**: https://seagri.df.gov.br
- **Horário de Atendimento**: Segunda a Sexta, 8h às 18h

## 📝 Changelog

### Versão Atual
- ✅ Interface completa do WhatsApp Business
- ✅ Sistema de conversação com múltiplos serviços
- ✅ Integração com Data SDK e Element SDK
- ✅ QR Code para compartilhamento
- ✅ Persistência de mensagens
- ✅ Design responsivo

### Próximas Melhorias
- 🔄 Integração com APIs oficiais da SEAGRI-DF
- 🔄 Sistema de notificações
- 🔄 Multilínguas (Português/Inglês)
- 🔄 Dashboard de analytics

## 📄 Licença

Este projeto foi desenvolvido para a SEAGRI-DF. Uso restrito conforme diretrizes do governo do Distrito Federal.

---

**DefesaBot v1.0** - Facilitando o acesso aos serviços da SEAGRI-DF através de tecnologia conversacional.

*Desenvolvido com ❤️ para a agricultura do Distrito Federal*