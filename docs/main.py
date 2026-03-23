import logging

# Set up logging to display debug messages by default
logging.basicConfig(level=logging.DEBUG)

class Game:
    def __init__(self, title, width, height):
        self.title = title
        self.width = width
        self.height = height
        self.running = False

    def start(self):
        self.running = True
        logging.info(f"Starting game '{self.title}'")

    def stop(self):
        self.running = False
        logging.info(f"Stopping game '{self.title}'")

    def update(self, dt):
        logging.debug(f"Updating game with delta time: {dt}")

class CoreEngine:
    def __init__(self):
        self.games = {}

    def add_game(self, game):
        self.games[game.title] = game

    def remove_game(self, title):
        if title in self.games:
            del self.games[title]

    def update(self, dt):
        for game in self.games.values():
            game.update(dt)

def main():
    engine = CoreEngine()

    game1 = Game("Game 1", 800, 600)
    game2 = Game("Game 2", 1024, 768)

    engine.add_game(game1)
    engine.add_game(game2)

    engine.update(0.01)
    engine.stop_game("Game 1")

    engine.update(0.02)

if __name__ == "__main__":
    main()