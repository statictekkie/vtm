skill: { name: string, rating: number, type: (L|A|K) }
quality: { name: string, karma: number, type: (P|N) }
lifestyle: { name: string, time: number }
contact: { name: string, loyalty: number, connection: number, favor: number }
license: {}

armor: { name: string, value: number, notes: string }
rangedWeapon: { name: string, damage: number, acc: number, ap: number, mode: string, rc: number, ammo: number }
meleeWeapon: { name: string, reach: number, damage: number, acc: number, ap: number }
augmentation: { name: string, rating: number, notes: string, essence: number }

character: {
    characterName: string,
    player: string,
    notes: string,
    personalData: {
        name: string,
        metatype: array_selection,
        ethnicity: string,
        age: number,
        sex: string,
        height: number,
        weight: number,
        streetCred: number,
        notoriety: number,
        publicAwareness: number,
        currentKarma: number,
        totalKarma: number,
        misc: object
    },
    combatInfo: {
        primaryArmor: [armor],
        primaryRanged: [rangedWeapon],
        primaryMelee: [meleeWeapon],
    },
    attributes{
        body: number,
        agility: number,
        reaction: number, 
        strength: number,
        willpower: number, 
        logic: number,
        intuition: number,
        charisma: number,
        edge: number,
        edgePoints: array(boolean[8]),
        essence: number,
        magicResonance: number,
        initiative: { base: number, modifier: number },
        matrixInitiative: { h: number, c: number },
        astralInitiative: { ????? },
        composure: number, 
        judgeIntentions: number,
        memory: number,
        lift: number,
        carry: number,
        movement: { base: number, ???: number, mod: number }
        physicalLimit: 4,
        mentalLimit: 5,
        socialLimit: 5
    },
    skills: array(skill),
    qualities: array(quality)
    lifestyles: {
        primary: array(lifestyle),
        nuyen: number,
        licenses: array(license),
        misc: array(object)
    }
    contacts: array(contact),
    rangedWeapons: array(rangedWeapon),
    meleeWeapons: array(meleeWeapon),
    augmentation: array(augmentation),
    cyberdeck: { 
        model: string, attack: number, sleaze: number, deviceRating: number, dataProcessing: number, firewall: number, programs: array(string),
        matrixCondition: array(boolean[12])
        
    }
    
}