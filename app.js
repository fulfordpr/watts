//    https://www.crownaudio.com/how-much-amplifier-power
//    https://www.crownaudio.com/en-US/tools/calculators#amp_power_required

const applications = [
        {
            use: 'Fol music in a coffee shop with 50 seats',
            watts: '25-250w'
        },
        {
            use: 'Folk or worship music in a medium auditorium 150-250 seats',
            watts: '95-250w'
        },
        {
            use: 'folk music at a small outdoor festival',
            watts: '250w'
        },
        {
            use: 'Pop or jazz in medium auditorium or club with 150-250 seats',
            watts: '250-750W'
        },
        {
            use: 'Pop or Jazz in a 2000 seat concet hall',
            watts: '400-1200w'
        },
        {
            use: 'Rock music ina medium auditorium 150-250 seats',
            watts: '1500w+'
        },
        {
            use: 'Rock music at small outdoor festival (about 50 feet away)',
            watts: '1000-3000W'
        },
        {
            use: 'heavy music in a stadium (100-300 feet from speaker to audience)',
            watts: '4000-15000w'
        }
]
const intensity = 0; //1.6 fir light  OR  2.5 for heavy
const ISLslider = document.querySelector('.ISLslider')
const sensetivity = 132
const origin = 3
let newPosition = ISLslider.value


ISLslider.addEventListener('input', ()=>{
    newPosition = ISLslider.value
    console.log(sensetivity + (20 * Math.log(origin/newPosition)))
    console.log(ISLslider.value)
})