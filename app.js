var changeWord = document.getElementById('word')

var words = [
    ['Apple', 'Ant', 'Algeria', 'Airplane', 'Ambulance', 'Athletic', 'Area'],
    ['Bee', 'Butterfly', 'Bulgaria', 'Book', 'Bicycle', 'Basket', 'Ball', 'Briefcase', 'Box'],
    ['Car', 'Chair', 'Clock', 'Computer', 'Camera', 'Cup', 'Candle', 'Calculator'],
    ['Desk', 'Door', 'Doll', 'Diamond', 'Dice', 'Dial'],
    ['Egg', 'Elephant', 'Eraser', 'Eyeglasses', 'Earphones'],
    ['Fork', 'Fan', 'Flashlight', 'Fountain', 'Firecracker'],
    ['Guitar', 'Glasses', 'Gun', 'Gamepad', 'Generator', 'Goggles'],
    ['Hammer', 'Hook', 'Hanger', 'Helmet', 'Hourglass', 'Handbag'],
    ['Icebox', 'Iron', 'Intercom', 'Inhaler', 'Instrument'],
    ['Jacket', 'Jar', 'Jeep', 'Jigsaw', 'Jukebox', 'Jewelry', 'Jet'],
    ['Key', 'Knife', 'Kite', 'Keyboard', 'Kickstand'],
    ['Lamp', 'Laptop', 'Ladder', 'Lightbulb', 'Lantern', 'Lens'],
    ['Mirror', 'Microscope', 'Magnet', 'Motorcycle', 'Mixer', 'Mask', 'Megaphone', 'Mailbox'],
    ['Necklace', 'Notebook', 'Nail', 'Needle', 'Napkin', 'Net', 'Nest'],
    ['Oven', 'Organizer', 'Opener', 'Orange'],
    ['Pen', 'Pencil', 'Plate', 'Phone', 'Pillow', 'Piano', 'Printer', 'Picture', 'Purse'],
    ['Quilt', 'Quill', 'Queue', 'Quarter', 'Quartz', 'Quadcopter'],
    ['Radio', 'Refrigerator', 'Remote', 'Rifle', 'Recorder', 'Razor', 'Rock'],
    ['Sofa', 'Spoon', 'Shoe', 'Sunglasses', 'Statue', 'Scissors', 'Suitcase', 'Skateboard', 'Speaker'],
    ['Table', 'Television', 'Telephone', 'Telescope', 'Towel', 'Toaster', 'Thermometer'],
    ['Umbrella', 'Ukulele', 'Utensils', 'USB'],
    ['Violin', 'Vacuum', 'Volleyball', 'Video'],
    ['Watch', 'Windmill', 'Wallet', 'Wrench'],
    ['X-ray', 'Xenon', 'Xbox'],
    ['Yogurt', 'Yurt', 'Yo-yo', 'Yardstick'],
    ['Zebra', 'Zipper', 'Zester', 'Zigzag', 'Zucchini'],
];



document.addEventListener("keydown", function(event) {
    // Call your function based on the pressed key
    getWord(event.key);
});

function getWord(alphabet) {
    let alphaCode = alphabet.charCodeAt(alphabet) - 97;
    let wordLen = words[alphaCode].length
    let randomWord = words[alphaCode][Math.floor(Math.random()*wordLen)]
    changeWord.innerHTML = randomWord
}