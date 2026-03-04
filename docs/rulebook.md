---
outline: deep
---

```ansi
[2;41m[0m[2;33m:3[0m
```

# Core Rulebook

Below is the official rulebook for the City and L Corp. Certain rulings are different between the two settings, so those will contain two sections.
On the right is a navigation bar letting you skip to a specific ruling.

## Stats

Every character has a collection of stats:
- Speed Slots:  This is how many actions a character can take in a single round.
- Health (HP):  Health represents a character’s fortitude and ability to mitigate incoming damage. They die or are knocked out when this hits 0.
- Stagger Resist (SR):  Represents a character’s balance and guard. Once Stagger hits 0, they enter a [STAGGERED] state and cannot act for the rest of the round, as well as the next round. All resistances are set to weak (1.5x).
- Sanity (SP):  Represents a character's mental health and stress levels. Low sanity levels lead to worse performance in battle and panic. When SP is below 50%, all rolls receive a -1. When a character starts with 0 SP at the start of the round, the character enters a [PANICKED] state for the rest of that round. They cannot act while panicked, but their resistances stay as normal. Afterward, their SP is reset back to max.
- Speed:  The character’s speed is a value added to their d100 speed roll to determine their speed slot initiative.
- Universal Points (UP):  These are points that can be added to any one of your skills, or used to increase your HP, SR, SP, Speed, or buy Passives.
- Light Attunement:  This determines which light-based magical abilities the character can access. Most NPCs have this set to 1.
- Skill Slots:  This determines how many unique skills your character has access to in battle.


### `City`

In the wider City, all of them are based on your overall Level. Set them as follows:
- Speed Slots
    - At levels 0 ~ 10, you have 1 speed slot.
    - At levels 11 ~ 50, you have 2 speed slots.
    - At levels 51 ~ 80, you have 3 speed slots.
    - At levels 81 ~ 100, you have 4 speed slots.
- Your HP (Health) starts at 40 and increases by 2 per level.
- Your SR (Stagger) starts at 20 and increases by 1 per level.
- Your SP (Sanity) starts at 40 and increases by 2 per level.
- Your Speed is equal to your level.
- You receive a single Universal Point every 3 levels.
- You start with 4 Skill Slots and gain a slot every 20 levels.

### `L Corp`

In L Corp, your level is divided into four virtues: Fortitude, Prudence, Temperance, and Justice. Set your stats as follows:
- Speed Slots
    - At Justice 0 ~ 32, you have 2 speed slots.
    - At Justice 33 ~ 65, you have 3 speed slots.
    - At Justice 66 ~ 98, you have 4 speed slots.
    - At Justice 99+, you have 5 speed slots.
- Your HP (Health) starts at 40 and increases by 2 per point in Fortitude.
- Your SR (Stagger) starts at 20 and increases by 1 per point in Fortitude.
- Your SP (Sanity) starts at 40 and increases by 2 per point in Prudence.
- Your Speed is equal to your Justice.
- You receive a single Universal Point every 3 levels (average of all virtues).
- You start with 4 Skill Slots and gain a slot every 20 points in Justice.

## Skill Creation

Creating skills is a four step process:
1. Choose the Light cost;
2. Choose the skill type (attack/damage/defense type);
3. Choose the dice;
4. Add conditions from the Skill Shop;

### `Light Cost`

::: warning Light Cost

[0] : 2 Base Points\
[1] : 6 Base Points\
[2] : 10 Base Points\
[3] : 15 Base Points\
[4] : 20 Base Points\
[5] : 26 Base Points\
[6] : 32 Base Points\
[7] : 40 Base Points\
[8] : 48 Base Points

:::

### `Dice`

|   Tier    |   Cost    |   Stagger |           |   Dice    |           |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
|   0       |   0       |   0       |   2d4     |   1d8     |           |
|   1       |   2       |   4       |   1d10    |           |           |
|   2       |   4       |   8       |   3d4     |   2d6     |   1d12+1  |
|   3       |   6       |   12      |   4d4     |   2d8+1   |           |
|   4       |   8       |   16      |   3d6     |   1d20    |           |
|   5       |   10      |   20      |   2d10+1  |   2d12    |           |
|   6       |   12      |   24      |   4d6+1   |   3d8+1   |           |

#### `Pips`

When upgrading or downgrading your Tier, you can choose to add pips instead of changing the dice. Every point of cost gives a +1 or -1 to the roll. This means going up a Tier gives you +2, and a -2 if you're going down a Tier. Don't forget to adjust Stagger as well when adding pips.

### `Skill Types`

There are broadly two categories of skills: offensive skills (these are affected by Strength and Feeble, and trigger Bleed) and defensive skills (these are affected by Endurance and Disarm).

#### `Offensive Skills (The City)`

In the City, there are three types of offensive skills you can choose from:
- Slash
- Pierce
- Blunt

These are mostly cosmetic and only interact with the damage resistance system, plus some passives.

When starting out, you can distribute the following Resistances between the three above damage types:
- Weak (1.5x damage)
- Normal (1x damage)
- Endured (0.75x damage)

#### `Offensive Skills (L Corp)`

In L Corp, there are four damage types. The damage you deal depends entirely on the weapon you're wielding.

|**RED**|**WHITE**|
|:---:|:---:|
|RED damage is simple. It lowers HP on hit. Examples of RED damage include knives, clubs, and guns.|WHITE damage is classified as mental trauma. It lowers your SP. If an ally applies WHITE damage to a friend, it heals their SP instead.|

|**BLACK**|**PALE**|
|:---:|:---:|
|BLACK damage is a corrosion, it is a rot that affects both body and mind. It lowers both HP and SP at once. If dealing BLACK damage to an ally, it will heal their SP but damage their HP.|PALE damage is damage directly to the soul. No matter how strong one's mind or body, it matters not to PALE damage. Regardless of your max HP, each point of PALE damage reduces it by 1%.|

Your resistance to each damage type depends on your E.G.O. Suit.

#### `Defensive Skills`

When a defensive and offensive skill clash, they never re-clash. All dice are only rolled a single time.
When two defense skills clash, nothing happens. Dice can still be rolled to see if you get a max/min roll.

##### `Evade`

Evade skills are all-or-nothing. If you win the clash, you dodge the attack, taking no damage, and you heal Stagger Resist equal to your Evade skill's Stagger stat. If you lose the clash, you take full damage. If you tie, you dodge the attack but heal no Stagger Resist.

##### `Guard`

Guard skills reduce the incoming damage and stagger damage by their roll. If you win the clash, you take no damage and deal Stagger damage to the enemy equal to the Guard skill's Stagger stat. If you lose the clash, the incoming damage and stagger damage will be reduced by the Guard skill roll. On a tie, you take no damage, but also deal no Stagger damage.

##### `Counter`

When you use a Counter skill, you will let the enemy hit you. Afterward, you will make an unopposed attack on them. Counter skills cannot attack: they can only be used in response to an incoming attack.

### `Status Effects`

#### `Keyword Status`

The following status effects can be gained/applied immediately by default, or at the start of the next round (this must be specified).

|Name|Icon|Description|
|:----:|:----:|:----|
|Burn||At the end of the round, take damage equal to Burn, then halve Burn on self (rounding down). You can buy 3 Burn per point (capped at 4 points, 12 Burn).|
|Bleed||Each time you use an offensive skill, first take damage equal to Bleed, then halve Bleed on self (rounding down). You can buy 2 Bleed per point (capped at 4 points, 8 Bleed).|
|Tremor||At the end of the round, take stagger damage equal to Tremor, then halve Tremor on self (rounding down). You can buy 1 Tremor per point (capped at 4 points, 4 Tremor).|
|Rupture||When hit by an offensive skill, take bonus damage equal to Rupture, then halve Rupture on self (rounding down). You can buy 2 Rupture per point (capped at 4 points, 8 Rupture).|
|Sinking||At the end of the round, take sanity damage equal to Sinking, then halve Sinking on self (rounding down). You can buy 5 Sinking per point (capped at 4 points, 20 Sinking).|
|Poise||Beneficial status. When rolling max value on all dice during the damage roll, consume all Poise on self and add it as damage. If not, consume only half. You can buy 3 Poise per point (capped at 4 points, 12 Poise).|
|Charge||Beneficial status. Does nothing on its own, instead acting as a 'stored up' status. NOTE: When gaining Charge, gain 50% more, rounded down. This means if you bought two points worth of Charge gain, you actually gain three. You can buy 2 Charge per point (capped at 6 points, 12 Charge).|

#### `Standard Status`

All of the following status effects are gained/applied at the start of the next round by default.
Strength, Feeble, Endurance, Disarm, Protection, and Fragile can be applied immediately, but this must be specified.
Haste and Bind cannot be applied immediately.

|Name|Icon|Description|
|:----:|:----:|:----|
|Strength||A positive modifier on all offensive rolls. You can buy 1 Strength for 2 points (capped at 6 points, 3 Strength).|
|Feeble||A negative modifier on all offensive rolls. You can buy 1 Feeble for 2 points (capped at 6 points, 3 Feeble).|
|Endurance||A positive modifier on all defensive rolls (including Counters). You can buy 1 Endurance for 2 points (capped at 6 points, 3 Endurance).|
|Disarm||A negative modifier on all defensive rolls (including Counters). You can buy 1 Disarm for 2 points (capped at 6 points, 3 Disarm).|
|Haste||A positive modifier on your speed roll at the start of the round. You can buy 10 Haste for 1 point (capped at 6 points, 60 Haste).|
|Bind||A negative modifier on your speed roll at the start of the round. You can buy 10 Bind for 1 point (capped at 6 points, 60 Bind).|
|Protection||Reduces incoming FINAL damage by 10% per stack, up to a max of 90%. You can buy 1 Protection for 2 points (capped at 6 points, 3 Protection).|
|Fragile||Increases incoming FINAL damage by 10% per stack. You can buy 1 Fragile for 2 points (capped at 6 points, 3 Fragile).|
|Paralysis||Reduces the max roll of dice by 3. 1 stack of Paralysis is expended for every die affected. (example: d8 > d5). You can buy 1 Paralysis for 1 point (capped at 3 points, 3 Paralysis).|

### `Skill Shop`

#### `Status Effect Application`

Status can be added onto a Skill for the price stated in the above tables. There are three ways of adding status application to your skill:
1. (0) [On Hit], [On Evade], or [On Block], applies the status after the clash is over and the damage step is over. This is the default.
2. (-1) [On Clash Win], [On Clash Lose], applies the status before the damage step. This costs 1 extra point.
3. (-2) [On Use], applies the status before the clash begins. This costs 2 extra points.

#### `Power Gain`

Power can be gained on many different conditions:
- (-2) Gain +1 power for every POINT of STATUS on self / target (max +6).
- (-2) Gain +1 power for every 10 speed above / below target (max +6).

The above can have more points invested to increase the power gain, but the cap always remains +6. For example, you can make it a '(-4) Gain +2 power for every point of status' instead.

- (-2) Gain +3 power if user / target has STATUS.

The above cannot be modified further.

#### `Conditionals`

Conditionals can be used to reduce the cost of some effects:
- Reduce the cost by 1 if you add the condition: "If target has STATUS"
- Reduce the cost by 2 if you add the condition: "If target has 2 POINTS of STATUS"

These cannot reduce the cost below 1.

#### `Buffing / Nerfing Own Stats`

Your Max HP, Stagger Resist, SP, and Speed can be buffed or nerfed for Universal Points.
- 2 HP is worth 1 UP
- 1 SR is worth 1 UP
- 2 SP is worth 1 UP
- 10 Speed is worth 1 UP

All of these are capped at 6 points.

#### `Light Gain`

Light gain can be added to a skill. A skill can only recover 1 more Light than it costs.
Light gain costs 4 points per Light, and by default is limited to [On Hit], [On Evade], or [On Block].
For 1 extra point, this can be changed to trigger [On Use] instead.

#### `Emotion Coins`

Skills may yield extra emotion coins. Adding this costs 3 points per Coin, and by default is limited to [On Hit], [On Evade], or [On Block].
Like with Light, for 1 extra point, this can be changed to trigger [On Use] instead.

#### `Healing`

HP, SP, and SR can be healed in combat, activated [On Hit], [On Evade], or [On Block].
For every point, 2 HP or 2 SP or 1 SR can be healed, capped at 6 points. You can invest more than 6 points as long as they are different values being healed (so you can spend 9 points, 6 on HP healing and 3 on SR healing).

#### `Sanity Conditionals`

The following two can be applied to a skill:
- (0) When above 50% Sanity, roll with a -1. When below 50% Sanity, roll with a +1. (The standard -1 is ignored.)
- (-1) When above 50% Sanity, roll with a -2. When below 50% Sanity, roll with a +2. (The standard -1 is ignored.)
- (-1 ~ -3) Gain +1 ~ +3 power against targets with less than 50% Sanity.

#### `Sin Affinity`

A single Sin Affinity can be assigned to a skill for a 1 point cost. This gives a 25% boost in corresponding status application, and gains you one of that Sin Resource on use.

#### `Chance-Based Trigger`

As a modifier to any other effect, you may add the condition that it only activates based on a chance roll of the LAST die of a skill. This will reduce the cost of the effect based on the chance, and doubles its cap (letting you apply more healing / damage / status / etc.). The cost reduction is equal to the chance that it lands. For example, an effect that only activates on a 6 on a d6 will cost 6 times less (1/6 chance).

#### `Dice Reuse`

On hit, dice may be reused and added as extra damage. These do not deal stagger damage.
Reusing d4 dice costs 3 points, d6 dice costs 4 points, d8 5 points, and d10 6 points. You may stack this.

#### `Charge`

Charge may be spent by a skill at the cost of 1 point. This spent Charge can then be used to buy other effects, with every 2 Charge spent being equal to 1 point.
Spending is capped at 12 Charge.
Additionally:
- 3 Charge may be spent to gain +1 power on the skill.

#### `Bullets`

Bullets act similarly to Charge, but cannot be replenished until you rest (fully recovering and resetting EL and Sin Resources).
Bullets can be spent at a 1 point cost to buy other effects. Every Bullet is worth 4 points.
Additionally:
- 1 Bullet may be spent to gain +2 power on the skill.

#### `AoE On Allies`

Status effects, light gain, and healing can be applied to all allies. Write down effects as normal, but these status effects cost three times as much as normal. ‘All allies’ includes yourself.
You can make it NOT include yourself, in which case the cost is doubled instead of tripled.

#### `Activate Skill`

You can make a skill activate a 0-cost skill of a chosen ally. This costs 6 to apply [On Hit], [On Evade], or [On Block].
It costs 8 for [On Use].

### `Light Attunement`

Light Attunement is the level of resonance and attunement an individual has to the light phenomenon, boasting a reduction in apathy and access to powerful abilities.
There are five levels of attunement:

1. No unlocked ability (Baseline)
2. Shin
3. Light Refraction
4. E.G.O.
5. Mang

#### `Emotion Level`

|Emotion Level|Coins For Next Level|Max Light|Light Gain|Misc|
|:---:|:---:|:---:|:---:|:---|
|0|3|3|1||
|1|3|4|1||
|2|5|5|2||
|3|7|6|2|+1 Speed Slot|
|4|9|7|3|E.G.O. Use Unlocked|
|5|X|8|3|+1 Speed Slot|

Leveling up your Emotion Level happens at the start of a new round. Extra Coins do not carry over.
Coins are gained in the following ways:
- +1: Engaging in a clash
- +1: Rolling min/max on all dice
- +3: Killing an enemy (except if they’re 40+ levels below you)
- +3: Losing an ally (except if they’re 40+ levels below you)

#### `Shin & Sin Affinities`

Shin is the ability to use emotions and sins to empower one’s abilities.
Once Shin is unlocked, you may assign a Sin to a skill in your arsenal at the cost of 1 point.

- WRATH is associated with Burn
- LUST is associated with Bleed
- SLOTH is associated with Tremor
- GLUTTONY is associated with Rupture
- GLOOM is associated with Sinking
- PRIDE is associated with Poise
- ENVY is associated with Charge

When a skill has a certain sin assigned to it, all corresponding statuses on that skill are increased by 25%, rounding up.
Each time a skill with a Sin is used, a Sin Resource is stored on the person. This resets when their Emotion Level resets.
Once thresholds are reached, see the table below.

|Name|Icon|7|14|
|:---:|:---:|:---|:---|
|Wrath||Gain a permanent 1 strength.|Gain a permanent 2 strength and 4 disarm.|
|Lust||Gain a permanent 30 speed.|Gain a permanent 60 speed. Each attack you do applies 2 tremor to yourself.|
|Sloth||Each attack applies +1 tremor.|Each attack applies +2 tremor. Lose 40 speed permanently.|
|Gluttony||Each attack heals 2 HP.|Each attack heals 4 HP. After halving negative Keyword status effects on self, add +1 stack.|
|Gloom||Each attack deals 5 Sanity damage.|Each attack deals 10 Sanity damage. Lose 10 Sanity every round.|
|Pride||Critical hits deal 50% extra FINAL damage.|Critical hits deal 100% extra FINAL damage. Gain a permanent 2 Fragile.|
|Envy||At the start of the round, gain 2 positive statuses of an enemy on the field.|At the start of the round, copy all positive statuses of an enemy on the field. Copy their negative statuses twice.|

#### `Light Refraction`

Light Refraction is an ability related to Shin & Mang and light usage. By giving in to one’s emotions very briefly, one can gain immense power in return for Sanity.
- For 10 SP, you may immediately restore 1 Light
- For 2 SP, you may immediately heal 2 HP, 2 SP, or 1 SR
- For 20 SP, you may permanently gain 1 Strength or Endurance

Beware, Light Refraction can only be used before the first panic state of the battle.
After reaching 0 Sanity for the first time, you cannot use Light Refraction in that fight anymore.

#### `E.G.O. & Distortion`

Before E.G.O. or Distortion can occur, the story must allow for it and you must have permission from the GM.
When a person has E.G.O. use unlocked (via high enough Light Attunement), and they reach Emotion Level 4, they may either **Manifest E.G.O**. or **Distort**.

Manifesting E.G.O. is a Guard skill unlocked at Level 4 with 2d12 dice. On use, regain all Stagger Resist and manifest E.G.O. at the start of the next round.
Being staggered will put you out of the **E.G.O. Manifested** state, but you can enter it again by using that skill.

##### `Partial Efflorescence`

Partial Efflorescence allows someone to Manifest Partial E.G.O.
After manifesting their E.G.O., a person gains access to a custom-made low-medium strength passive that is completely free (marked (EX)).
Additionally, all their skills cost 1 less Light to use.
Lastly, they gain access to a custom E.G.O. skill which costs 4, 5, or 6 Light to use, whose cost is not lowered by the earlier bonus.

##### `Complete Efflorescence`

Complete Efflorescence allows someone to Manifest E.G.O.
Their passive becomes a high strength passive.
All skills (except E.G.O. skills) cost 3 less Light to use rather than 1.
Additionally, you get access to one more E.G.O. skill at 4, 5, or 6 cost. Both E.G.O. skills start with 50% more points than normal. You can make one skill a Mass Attack skill by forfeiting this point bonus.

You can also choose to have a completely different skillset when manifested.

##### `Distortion`

After distorting, a person gains access to a free, high strength passive. All skills (except E.G.O. skills) cost 3 less Light to use.
Additionally, you get access to two E.G.O. skills at 4, 5, or 6 cost. Both E.G.O. skills start with 50% more points than normal. You can make one skill a Mass Attack skill by forfeiting this point bonus.
Your skillset is also completely replaced.

#### `Mang`

Mang is an ability related to Shin, wherein you gain uses of Mang equal to the amount of total Sin Resources you have acquired in battle.
The ability to use this is unlocked at maximum Light Attunement.
- At 0~7 Sin Resources, 1 Mang.
- At 8~14 Sin Resources, 2 Mang.
- At 15+ Sin Resources, 3 Mang.

Mang can be spent when rolling in a clash or when you are hit by an attack.
1 Mang can be spent to activate any of the following:
- +2 to Clash rolls this clash;
- +6 to the Damage roll;
- +2 Protection when about to be hit;

Mang is recharged back to full at the start of every round.

### `Buying Passives`

Passives can be bought only for Universal Points. A full list is available [here](/passives).