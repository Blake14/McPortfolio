export const AdventData = [
	{
		year: 2023,
		day: 1,
		status: 'In Progress',
		won: false,
		hidden: false,
		title: `Trebuchet?!`,
		referenceFiles: [],
		answers: [9999],
		link: '',
		comments: [],
		mainText: `Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.
    
Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
    
You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").
    
As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.
    
The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
    
For example:

  > 1abc2
  > pqr3stu8vwx
  > a1b2c3d4e5f
  > treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

To begin, get your puzzle input.
    
    `,
	},
	{
		year: 2023,
		day: 2,
		status: 'Complete',
		won: false,
		hidden: false,
		title: `Cube Conundrum`,
		referenceFiles: [],
		answers: [8],
		link: '',
		comments: [],
		mainText: `You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.

The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?
    
As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.
    
To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.
    
You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).
    
For example, the record of a few games might look like this:
    
  > Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  > Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  > Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  > Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  > Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.
    
The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
    
In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.
    
Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?
    
To begin, get your puzzle input.
    
    `,
	},
	{
		year: 2023,
		day: 3,
		status: 'Created',
		won: false,
		hidden: false,
		title: `Gear Ratios`,
		referenceFiles: [],
		answers: [],
		link: '',
		comments: [],
		mainText: `You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.
    
"Aaah!"
    
You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.
    
The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.
    
The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)
    
Here is an example engine schematic:

      467..114..
      ...*......
      ..35..633.
      ......#...
      617*......
      .....+.58.
      ..592.....
      ......755.
      ...$.*....
      .664.598..

In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?
    `,
	},
	{
		year: 2023,
		day: 4,
		status: 'Created',
		won: false,
		hidden: false,
		title: `Scratchcards`,
		referenceFiles: [],
		answers: [],
		link: '',
		comments: [],
		mainText: `
The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station.

As you exit the gondola, the first thing you notice is that the air here is much warmer than it was on Snow Island. It's also quite humid. Is this where the water source is?
    
The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards.
    
"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources.
    
"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is Island Island, after all! I bet the gardener would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you borrow my boat and you can go visit the gardener. I got all these scratchcards as a gift, but I can't figure out what I've won."
    
The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have. You organize the information into a table (your puzzle input).
    
As far as the Elf has been able to figure out, you have to figure out which of the numbers you have appear in the list of winning numbers. The first match makes the card worth one point and each match after the first doubles the point value of that card.
    
For example:
    
    Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
    Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
    Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
    Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
    Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
    Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
    
In the above example, card 1 has five winning numbers (41, 48, 83, 86, and 17) and eight numbers you have (83, 86, 6, 31, 17, 9, 48, and 53). Of the numbers you have, four of them (48, 83, 17, and 86) are winning numbers! That means card 1 is worth 8 points (1 for the first match, then doubled three times for each of the three matches after the first).
    
    > Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
    > Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
    > Card 4 has one winning number (84), so it is worth 1 point.
    > Card 5 has no winning numbers, so it is worth no points.
    > Card 6 has no winning numbers, so it is worth no points.
    
So, in this example, the Elf's pile of scratchcards is worth 13 points.
    
Take a seat in the large pile of colorful cards. How many points are they worth in total?
    `,
	},
	{
		year: 2023,
		day: 5,
		status: 'Created',
		won: false,
		hidden: false,
		title: `If You Give A Seed A Fertilizer`,
		referenceFiles: [],
		answers: [],
		link: '',
		comments: [],
		mainText: `
You take the boat and find the gardener right where you were told he would be: managing a giant "garden" that looks more to you like a farm.

"A water source? Island Island is the water source!" You point out that Snow Island isn't receiving any water.
    
"Oh, we had to stop the water because we ran out of sand to filter it with! Can't make snow with dirty water. Don't worry, I'm sure we'll get more sand soon; we only turned off the water a few days... weeks... oh no." His face sinks into a look of horrified realization.
    
"I've been so busy making sure everyone here has food that I completely forgot to check why we stopped getting more sand! There's a ferry leaving soon that is headed over in that direction - it's much faster than your boat. Could you please go check it out?"
    
You barely have time to agree to this request when he brings up another. "While you wait for the ferry, maybe you can help us with our food production problem. The latest Island Island Almanac just arrived and we're having trouble making sense of it."
    
The almanac (your puzzle input) lists all of the seeds that need to be planted. It also lists what type of soil to use with each kind of seed, what type of fertilizer to use with each kind of soil, what type of water to use with each kind of fertilizer, and so on. Every type of seed, soil, fertilizer and so on is identified with a number, but numbers are reused by each category - that is, soil 123 and fertilizer 123 aren't necessarily related to each other.
    
For example:
    
    seeds: 79 14 55 13
    
    seed-to-soil map:
    50 98 2
    52 50 48
    
    soil-to-fertilizer map:
    0 15 37
    37 52 2
    39 0 15
    
    fertilizer-to-water map:
    49 53 8
    0 11 42
    42 0 7
    57 7 4
    
    water-to-light map:
    88 18 7
    18 25 70
    
    light-to-temperature map:
    45 77 23
    81 45 19
    68 64 13
    
    temperature-to-humidity map:
    0 69 1
    1 0 69
    
    humidity-to-location map:
    60 56 37
    56 93 4
    
The almanac starts by listing which seeds need to be planted: seeds 79, 14, 55, and 13.
    
The rest of the almanac contains a list of maps which describe how to convert numbers from a source category into numbers in a destination category. That is, the section that starts with seed-to-soil map: describes how to convert a seed number (the source) to a soil number (the destination). This lets the gardener and his team know which soil to use with which seeds, which water to use with which fertilizer, and so on.
    
Rather than list every source number and its corresponding destination number one by one, the maps describe entire ranges of numbers that can be converted. Each line within a map contains three numbers: the destination range start, the source range start, and the range length.
    
Consider again the example seed-to-soil map:
    
    50 98 2
    52 50 48
    
The first line has a destination range start of 50, a source range start of 98, and a range length of 2. This line means that the source range starts at 98 and contains two values: 98 and 99. The destination range is the same length, but it starts at 50, so its two values are 50 and 51. With this information, you know that seed number 98 corresponds to soil number 50 and that seed number 99 corresponds to soil number 51.
    
The second line means that the source range starts at 50 and contains 48 values: 50, 51, ..., 96, 97. This corresponds to a destination range starting at 52 and also containing 48 values: 52, 53, ..., 98, 99. So, seed number 53 corresponds to soil number 55.
    
Any source numbers that aren't mapped correspond to the same destination number. So, seed number 10 corresponds to soil number 10.
    
So, the entire list of seed numbers and their corresponding soil numbers looks like this:
    
    seed  soil
    0     0
    1     1
    ...   ...
    48    48
    49    49
    50    52
    51    53
    ...   ...
    96    98
    97    99
    98    50
    99    51
    
With this map, you can look up the soil number required for each initial seed number:
    
        > Seed number 79 corresponds to soil number 81.
        > Seed number 14 corresponds to soil number 14.
        > Seed number 55 corresponds to soil number 57.
        > Seed number 13 corresponds to soil number 13.
    
The gardener and his team want to get started as soon as possible, so they'd like to know the closest location that needs a seed. Using these maps, find the lowest location number that corresponds to any of the initial seeds. To do this, you'll need to convert each seed number through other categories until you can find its corresponding location number. In this example, the corresponding types are:
    
        > Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
        > Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
        > Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
        > Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.
    
So, the lowest location number in this example is 35.
    
What is the lowest location number that corresponds to any of the initial seed numbers?
    `,
	},
	{
		year: 2023,
		day: 6,
		status: 'Created',
		won: false,
		hidden: false,
		title: `Wait For It`,
		referenceFiles: [],
		answers: [],
		link: '',
		comments: [],
		mainText: `

    `,
	},
];
