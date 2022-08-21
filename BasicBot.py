import discord, requests, json, os
from dotenv import load_dotenv

client = discord.Client()

load_dotenv()
client.run(os.getenv("BASIC_DISCORD_BOT"))