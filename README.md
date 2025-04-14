# Drink Water Reminder
(Lembrete de consumo de água!)
> Criado para o meu avô que precisa beber água constantemente! ❤️

Este projeto, desenvolvido em node.js e typescript, por meio da TwillioAPI realiza o envio de mensagens customizáveis de forma períodica para o número de destino via whatsapp, o tempo de disparo entre uma mensagem e outra também pode ser configurado.


## Instalação das dependências:

```sh
npm install
```
# Executar Aplicativo no Ambiente de Desenvolvimento:

Para executar o projeto, execute um dos seguintes comandos no terminal:
```bash
  npm run dev
```

# Para Buildar a Aplicação: 

Para compilar o projeto:

```bash
  npm run build
```

Esta aplicação realiza o envio de mensagens customizáveis de forma períodica via whatsapp, o tempo de disparo da mensagem também pode ser configurado com o uso da dependência Node-Cron.

# Configuração para Uso

Crie uma conta na Twillio(https://www.twilio.com/en-us) 
Com a conta criada, siga para configuração sandbox do whatsapp, você poderá efetuar o procedimento via mensagem no whatsapp fornecido, ou escaneando o código QR disponibilizado na tela da Twillio(https://www.twilio.com/console/sms/whatsapp/learn)
Após realizar o primeiro contato e configurar (join tax-classroom), salve os seguintes parâmetros para uso no projeto: 

TWILIO_ACCOUNT_SID= Fornecido pelo Twillio
TWILIO_AUTH_TOKEN= Fornecido pelo Twillio
TWILIO_WHATSAPP_NUMBER= Fornecido pelo Twillio
DESTINATARIO= Número destino para receber as mensagens. 

![image](https://github.com/user-attachments/assets/dea6429a-939d-4c97-a518-5ec35634dceb)


Instale as dependências do projeto com npm install. 
Após preencher os campos necessários no arquivo ".env", rode o projeto no modo de desenvolvimento com o comando npm run dev.
Por padrão o tempo estimado para envio de mensagens é de 15 minutos. 

Caso queira realizar um teste rápido, basta chamar o método diretamente no arquivo index.ts desta forma: sendReminder(); e dentro de 1 minuto você irá receber a mensagem no whatsapp de destino. 
![image](https://github.com/user-attachments/assets/0c6a4406-37db-4b93-926d-1fa00bd5faaa)


# Exemplo de mensagem recebida: 
No contexto desta aplicação, o lembrete para beber água foi recebido com sucesso. 

 ![image](https://github.com/user-attachments/assets/d847cac6-1473-42b5-9759-b9c5760e05ba)



