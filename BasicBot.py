import discord, requests, json, os
from dotenv import load_dotenv

client = discord.Client(intents=discord.Intents.default())

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