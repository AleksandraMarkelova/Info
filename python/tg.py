import telebot
bot = telebot.TeleBot("7410894748:AAFjFIfnmjYzpqMCw6PDJ7v92X5ISO1QsQQ")

@bot.message_handler(commands=['id'])
def id(message):
    bot.send_message(message.chat.id, message.from_user.id)

bot.polling(none_stop=True)
