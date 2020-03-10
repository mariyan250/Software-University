function solve({ model, power, color, carriage, wheelsize }) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    const engineArr = Object.values(engines);

    return {
        model,
        engine: engineArr.find(engine => engine.power >= power),
        carriage: {
            type: carriage,
            color
        },
        wheels: Array(4).fill(wheelsize % 2 == 0 ? wheelsize - 1 : wheelsize)
    }
}