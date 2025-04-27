from flask import Flask, render_template
import random

app = Flask(__name__)

GIFS = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZoa2lydjc3M2dzOXV0bzg0bHlieTZsM2g2bmxkaXVpZ3VvYjNmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgmYmdpKcucMQjm/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY21vY3BlYmFrMzVhYmI3YXd0NndmMGRlZnBsOXBlMzFlYmFwbnpuZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9k0EsuVx8eEjTqM/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGZwcTUzOGxrbjV5bGJia2lkdWxiMnIyanhzNHo2dnprNG5ubjBmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9k4JqKzqgVnqld6/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZkbDZlMnp0ODE1bTNqYXUzajhhaGZ1N3MwenlqZWh4M3NqcnNoaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btSthLTruQMZZuM/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBjaGpkZGp1azVwejZhNzRkdHBtb2w3MDF2M2dmZDZ3dHc4MTMzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriOdYqPaOCq9aO76/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGxmcGNjeXc4aG1uMHhnbHpocWRnbzQ1cnhoajNidG5sMHhiMXM0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT39CVxQ2yz9gEdLyM/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZ2YXA4ZXI0YW5odGxxMWQ4ZzBsMmgzOW5zcjh5dWwyczRrOXYydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vXWsVSixG34spDG/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2hyaWt5eXduazRjOXI4NHc5cHBkY3pybWozN2Jkdngxb3Z5cWc2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41JLB11K80e2f8B2/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW91YjN6dHA3YzdwNHo1dm5ueGIyaGMxNXQ3bXVtOXhpMXBzd3JrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41JVAE3RKgPoGWCk/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpuZWs3eWUzMnA2YTB0aGU5ZmFtNTBreDM5MXdyeWRxMzlmamVvOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3JDiZ71qmjtaIYE0/giphy.gif",

]

@app.route("/")
def index():
    gif_url = random.choice(GIFS)
    return render_template("index.html", gif_url=gif_url)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
