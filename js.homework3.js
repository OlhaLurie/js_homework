function checkProbabilityTheory(count){
    let evenCount = 0;
    let oddCount = 0;
    for (let i=0; i<count; i++){
        let randomNumber = Math.floor (Math.random()*(1000-100+1))+100;
               if (randomNumber %2 ===0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let percentage = (evenCount/count)*100;
    return{
        total: count,
        even: evenCount,
        odd: oddCount,
        ratio: percentage
    };
}
    let result = checkProbabilityTheory(100);
    console.log ("Кількість сгенерованих чисел:" +result.total);
    console.log ("Кількість парних чисел:" +result.even);
    console.log ("Кількість не парних чисел" +result.odd);
    console.log ("Відсоток парних до непарних" +result.ratio +"%")
