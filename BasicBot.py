import discord, requests, json, os
from dotenv import load_dotenv

client = discord.Client(intents=discord.Intents.default())

def get_quote():
    response = requests.get("https://zenquotes.io/api/random")
    json_data = json.loads(response.text)
    quote = json_data[0]["q"] + "\n-" + json_data[0]["a"]
    return quote


@client.event
async def on_ready():
    print("We have logged in as {0.user}".format(client))


@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.content.startswith("$hello"):
        await message.channel.send("Hello")
    elif message.content.startswith("$inspire"):
        await message.channel.send(get_quote())

load_dotenv(".env")
client.run(os.getenv("BASIC_DISCORD_TOKEN"))