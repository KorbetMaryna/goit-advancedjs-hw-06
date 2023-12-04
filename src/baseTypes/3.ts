// TODO: У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:

let some: unknown;
some = 'Text';
let str: string;
if( typeof some === "string"){
    str = some;
}else {
    console.log('let some must be string')
}

export {str};