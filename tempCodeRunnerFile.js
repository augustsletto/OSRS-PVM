

monsters.forEach(monster => {
    let index = parseInt(monster.locationname);

    let location = {
        name: monster.name + " " + monster.locationname,
        "button text": monster["button text"],
        "button functions": monster["button functions"],
        text: monster.chatIcon + "Grrrrrr.",
        boss: monster.bossImage,
        enemyName: monster.name,
        enemyLvl: monster.Lvl,
        enemyHpbar: `<progress value="100" max="100"></progress>`,
        enemyHealth: monster.currentHp + " / " + monster.maxHp,
    };

    locations.splice(index, 0, location)
})
