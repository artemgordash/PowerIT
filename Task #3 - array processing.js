const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll')

const substituteInMiddle = (array, item) => {
    const middleIndex = array.length / 2
    array.splice(middleIndex, 1, item)   
}

substituteInMiddle(styles, 'Classic')

console.log(styles.shift())

styles.unshift('Rap', 'Reggae')