import discord, requests, json, os
from dotenv import load_dotenv

client = discord.Client(intents=discord.Intents.default())

async def on_ready():
    print("We have logged in as {0.user}".format(client))


client.run(os.getenv("BASIC_DISCORD_TOKEN"))