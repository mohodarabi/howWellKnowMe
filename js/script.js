let step0 = document.querySelector('.step0')
let step1 = document.querySelector('.step1')
let step2 = document.querySelector('.step2')
let step3 = document.querySelector('.step3')
let goEasy = document.querySelector('#goEasy')
let goMedium = document.querySelector('#goMedium')
let goHard = document.querySelector('#goHard')
let widthError = document.querySelector('.WidthError')
let enterName = document.querySelector('#enterName')
let inputName = document.querySelector('#validationCustom01')
let nameError = document.querySelector('.nameError')
let name = document.querySelector('#name')
let soalJavab = document.querySelector('.soalJavab')
let next = document.querySelector('#next')
let responde = document.querySelector('.responde')
let score = document.querySelector('#score')
let correct = document.querySelector('#correct')
let wrong = document.querySelector('#wrong')
let wrongA = document.querySelector('#wrongA')
let correctA = document.querySelector('#correctA')
let mode = document.querySelector('#mode')
let myComment = document.querySelector('#myComment')

let user = {

    quiz: [

        { qid: 0, ans: 0, flag: false },
        { qid: 1, ans: 0, flag: false },
        { qid: 2, ans: 0, flag: false },
        { qid: 3, ans: 0, flag: false },
        { qid: 4, ans: 0, flag: false },
        { qid: 5, ans: 0, flag: false },
        { qid: 6, ans: 0, flag: false },
        { qid: 7, ans: 0, flag: false },
        { qid: 8, ans: 0, flag: false },
        { qid: 9, ans: 0, flag: false },
        { qid: 10, ans: 0, flag: false },
        { qid: 11, ans: 0, flag: false },

    ]

}

let emtiaz = 1

let easy = [

    { question: 'خواننده های مورد علاقم ؟', a1: 'محسن چاوشی-رضا یزدانی', a2: 'هوروش-محسن یگانه', a3: 'رضا بهرام-سیروان', a4: 'سیروان-زانیار', answer: 'سیروان-زانیار', wrongA: 'نعاموآآ 😟', correctA: 'حل میکنی چقد آسون بود😉' },
    { question: 'غذای غیر بوشهری مورد علاقم ؟', a1: 'ته چین', a2: 'خورشت سبزی', a3: 'قیمه بادمجون', a4: 'کوفته تبریزی', answer: 'ته چین', wrongA: 'یعنیا حاضرم صبونه هم ته چین بخورم 😋', correctA: 'یعنیا حاضرم صبونه هم ته چین بخورم 😋' },
    { question: 'بچه چندم خانوادم ؟', a1: 'سوم', a2: 'اول', a3: 'دوم', a4: 'چهارم', answer: 'دوم', wrongA: '🥺🥺🥺🥺🥺🥺', correctA: 'دنیا و بچه های وسط 😍' },
    { question: 'کدوم یکی از اینام ؟', a1: 'دست راست پا چپ', a2: 'دست و پا راست', a3: 'دست چپ پا راست', a4: 'دست و پا چپ', answer: 'دست و پا چپ', wrongA: 'یا جد پیغمبر 😞', correctA: 'احسنت 😘' },
    { question: 'چن سالمه ؟', a1: '20', a2: '12', a3: '22', a4: '21', answer: '21', wrongA: 'داری با من چکار میکنی🤯', correctA: 'ن پ 12 سالمه🤪' },
    { question: 'تیم فوتبال مرد علاقم ؟', a1: 'دورتمند', a2: 'میلان', a3: 'بارسا', a4: 'من یونایتد', answer: 'بارسا', wrongA: '😧😧😧😧😧', correctA: 'ن پ دورتمند 😆' },
    { question: 'کدوم ایموجی منم ؟', a1: '😆', a2: '🤣', a3: '😐', a4: '😢', answer: '🤣', wrongA: 'ای بابا 😐', correctA: '🤣🤣🤣' },
    { question: 'چی حالمو خوب میکنه ؟', a1: 'غذا خوردن', a2: 'خواب', a3: 'فیلم دیدن', a4: 'کتاب خوندن', answer: 'فیلم دیدن', wrongA: 'ای حال میده 😀', correctA: 'ای حال میده 😀' },
    { question: 'کدوم رو ترجیح میدم ؟', a1: 'عصر', a2: 'روز', a3: 'شب', a4: 'ظهر', answer: 'شب', wrongA: 'ناموسن؟😒', correctA: 'قبول داری سخت نبود😁' },
    { question: 'درس مورد علاقم ؟', a1: 'زیست', a2: 'ریاضی', a3: 'فیزیک', a4: 'شیمی', answer: 'ریاضی', wrongA: '😱😱😱😱', correctA: 'چی عجیبین 🤓' },
    { question: 'رشته ی در حال تحصیلم ؟', a1: 'علوم کامپیوتر', a2: 'حسابداری', a3: 'مهندسی کامپیوتر', a4: 'عمران', answer: 'مهندسی کامپیوتر', wrongA: 'یا جد پیغمبر 😬', correctA: 'هزاران آفرین 😄' },
    { question: 'این اخریم دیگه چون تا اینجا اومدی امتیازش برای خودت', a1: 'روی', a2: 'هرکدوم', a3: 'میخوای', a4: 'بزن', answer: 'سیب', wrongA: 'خستت نمیکنم 👋', correctA: 'خستت نمیکنم 👋' },

]

let medium = [

    { question: 'فصل مورد علاقم ؟', a1: 'تابستون', a2: 'پاییز', a3: 'زمستون', a4: 'بهار', answer: 'بهار', wrongA: '😵😵😵', correctA: 'صد البته که بهار 👌' },
    { question: 'شغل مورد علاقم بجز برنامه نویسی ؟', a1: 'حسابدار', a2: 'معلم', a3: 'کارمند', a4: 'تاکسی اینترنتی', answer: 'معلم', wrongA: 'ای خشن معلمی 😁', correctA: 'ای خشن معلمی 😁' },
    { question: 'کدوم رو ترجیح میدم ؟', a1: 'با رفیقا بزنیم بیرون', a2: 'ورزش', a3: 'بازی', a4: 'خواب', answer: 'با رفیقا بزنیم بیرون', wrongA: 'دنیا و رفیق 🧑‍🤝‍🧑🧑‍🤝‍🧑', correctA: 'دنیا و رفیق 🧑‍🤝‍🧑🧑‍🤝‍🧑' },
    { question: 'شبکه اجتماعی مورد علاقم ؟', a1: 'اینستا', a2: 'تلگرام', a3: 'واتساپ', a4: 'تیک تاک', answer: 'اینستا', wrongA: 'چنن عامو 👀', correctA: '🙏🙏🙏🙏' },
    { question: 'کشور مورد علاقم بجز ایران ؟', a1: 'آلمان', a2: 'اسپانیا', a3: 'انگلیس', a4: 'هلند', answer: 'انگلیس', wrongA: '🤐🤐🤐🤐', correctA: 'هاااااع 👌👌👌' },
    { question: 'ابر قهرمان مورد علاقم ؟', a1: 'بت من', a2: 'بروس لی', a3: 'جکی جان', a4: 'مرد عنکبوتی', answer: 'مرد عنکبوتی', wrongA: 'چراااااا😡', correctA: 'بروس لیم بد نبودا🤪' },
    { question: 'کارگردان مورد علاقم ؟', a1: 'اسکورسیزی', a2: 'تارانتینو', a3: 'تاد فیلیپس', a4: 'اسپیلبرگ', answer: 'تارانتینو', wrongA: 'ایم واقعا خوبه 👌', correctA: 'فک کنم تمام فیلماشو دیدم 🤩' },
    { question: 'ترسناک ترین حیوان ؟', a1: 'تمساح', a2: 'گراز', a3: 'مار', a4: 'موش', answer: 'مار', wrongA: 'قبولت دارم 😘', correctA: '👌👌👌👌' },
    { question: 'ژانر فیلمی مورد علاقم ؟', a1: 'معمایی-جنایی', a2: 'درام-عاشقانه', a3: 'علمی-تخیلی', a4: 'ابر قهرمانی', answer: 'معمایی-جنایی', wrongA: 'رو دسش نمیا 🤩', correctA: 'رو دسش نمیا 🤩' },
    { question: 'کدوم قسمت سفر و ترجیح میدم ؟', a1: 'رفتن به جاهای دیدنی', a2: 'جاده', a3: 'رسیدن', a4: 'تموم شدنش', answer: 'جاده', wrongA: 'فقط جاده 😍', correctA: 'خیییلی خوبه لامصب 😍' },
    { question: 'غذای بوشهری مورد علاقم ؟', a1: 'ماهی', a2: 'قیمه ی بوشهری', a3: 'میگو', a4: 'قلیه', answer: 'قیمه ی بوشهری', wrongA: 'غذا رو دس قیمه نیماد 😋', correctA: 'هاااااع بنازم😋' },
    { question: 'این اخریم دیگه چون تا اینجا اومدی امتیازش برای خودت', a1: 'روی', a2: 'هرکدوم', a3: 'میخوای', a4: 'بزن', answer: 'سیب', wrongA: 'خستت نمیکنم 👋', correctA: 'خستت نمیکنم 👋' },

]

let hard = [

    { question: 'سریال مورد علاقم ؟', a1: 'harry potter', a2: 'friends', a3: 'game of thrones', a4: 'peaky blinders', answer: 'harry potter', wrongA: 'اشکال نداره واقعا سخت بود🙂', correctA: 'درود بر تو سوال سختی بود😍' },
    { question: 'فست فود مورد علاقم ؟', a1: 'همبرگر', a2: 'پیتزا', a3: 'هات داگ', a4: 'برام فرق نمیکنه', answer: 'همبرگر', wrongA: 'آسون بود که😕', correctA: 'آفرین😄' },
    { question: 'کنسول بازی مورد علاقم ؟', a1: 'ps4', a2: 'xbox', a3: 'pc', a4: 'هرچی باشه', answer: 'هرچی باشه', wrongA: 'نعامو چ فرقی میکنها😅', correctA: 'ها عامو یچی باشه فیفا بزنیم😂' },
    { question: 'انیمیشن مورد علاقم ؟', a1: 'toy storie', a2: 'sherek', a3: 'coco', a4: 'mega mind', answer: 'coco', wrongA: 'قبول دارم سخت بود😉', correctA: 'درود بر شرفت😘' },
    { question: 'شخصیت محبوبم تو فرندز ؟', a1: 'جویی', a2: 'چندلر', a3: 'فیبی', a4: 'راس', answer: 'چندلر', wrongA: 'بیخیال😮', correctA: 'خیلی خوبه👌' },
    { question: 'بازیکن مورد علاقم بجز مسی ؟', a1: 'ژاوی', a2: 'اینیستا', a3: 'دنی آلوز', a4: 'پویول', answer: 'اینیستا', wrongA: 'اونم دوس دارما ولی اینیستا چی دیگن 👍', correctA: 'عااالی😍' },
    { question: 'بنظر خودم بهترین سال زندگیم ؟', a1: '21', a2: '20', a3: '19', a4: '18', answer: '20', wrongA: 'خییییلی سخت بود 😢', correctA: 'بابا باریکلا😘😘😘' },
    { question: 'ترکیب رنگی مورد علاقم ؟', a1: 'آبی-بنفش', a2: 'آبی-قرمز', a3: 'سیاه-طلایی', a4: 'سیاه-سفید', answer: 'سیاه-طلایی', wrongA: 'قبولت دارم 😎', correctA: 'تو دیگه کی هستی 🤔' },
    { question: 'شخصیت مورد علاقم تو هری پاتر ؟', a1: 'سیریوس بلک', a2: 'پرفسور اسنیپ', a3: 'دامبلدور', a4: 'هری پاتر', answer: 'سیریوس بلک', wrongA: 'تا اینجا سخت ترین سوال بود 😮', correctA: 'میدونم کسی هسی😐😐' },
    { question: 'پست مورد علاقم تو فوتبال ؟', a1: 'دفاع', a2: 'مهاجم', a3: 'هافبک هجومی', a4: 'وینگر چپ', answer: 'هافبک هجومی', wrongA: 'اشکال نداره خودمم خیلی مطمئن نیسم 😂', correctA: 'درود 👌' },
    { question: 'میوه مورد علاقم ؟', a1: 'کیوی', a2: 'پرتغال', a3: 'هندوانه', a4: 'سیب', answer: 'سیب', wrongA: 'خستت نمیکنم 👋', correctA: 'خستت نمیکنم 👋' },
    { question: 'این اخریم دیگه چون تا اینجا اومدی امتیازش برای خودت', a1: 'روی', a2: 'هرکدوم', a3: 'میخوای', a4: 'بزن', answer: 'سیب', wrongA: 'خستت نمیکنم 👋', correctA: 'خستت نمیکنم 👋' },

]

let counter = 0

if (window.innerWidth <= 600) {

    widthError.style.display = 'none'
    step0.style.display = 'block'

} else {

    widthError.style.display = 'flex'
    step0.style.display = 'none'

}

enterName.addEventListener('click', function (event) {

    if (inputName.value === '') {

        event.preventDefault()
        inputName.style.boxShadow = '0 0 0 0.2rem rgba(255,0,0,.25)'
        inputName.style.borderColor = '#ff8080'
        nameError.innerHTML = 'تا پرش نکنی نمیتونی بری مرحله ی بعدی😬'
        nameError.style.color = '#ff8080'

    } else {

        name.innerHTML = inputName.value
        inputName.style.boxShadow = '0 0 0 0.2rem rgba(51,255,0,.25)'
        inputName.style.borderColor = '#80ff84'
        step0.style.display = 'none'
        step1.style.display = 'block'
        user.name = inputName.value

    }

});

let make = (questions, counter) => {

    string =
        `
        <div class="col text-center d-flex flex-column align-items-right">
            <div class="jumbotron mb-3 jumbotron-fluid">
                <span class="soal">سوال</span>
                <p class="lead pt-2">${questions[counter].question}</p>
            </div>
            </div>
            <div class="col">
                <div class="d-flex justify-content-between">
                    <a name="" id="" class="1 gozine btn btn-dark w-50" href="#" role="button">${questions[counter].a1}</a>
                    <a name="" id="" class="2 gozine btn btn-dark w-50 mr-2" href="#" role="button">${questions[counter].a2}</a>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <a name="" id="" class="3 gozine btn btn-dark w-50" href="#" role="button">${questions[counter].a3}</a>
                    <a name="" id="" class="4 gozine btn btn-dark w-50 mr-2" href="#" role="button">${questions[counter].a4}</a>
                </div>
            </div>
        `

    soalJavab.innerHTML = string;

}

let c = 0

let answer = (questions, counter, level) => {

    user.mode = level

    let gozinha = document.querySelectorAll('.gozine')

    for (let i = 0; i < gozinha.length; i++) {

        responde.innerHTML = ''

        gozinha[i].addEventListener('click', function (event) {

            if (counter <= 10) {

                let selected = gozinha[i].innerHTML
                let gozinh = gozinha[i].classList[0]
                user.quiz[c].ans = parseInt(gozinh)

                if (selected === questions[counter].answer) {

                    correctA.play()
                    event.target.classList.remove('btn-dark')
                    event.target.classList.add('btn-success')
                    responde.innerHTML = questions[counter].correctA
                    user.quiz[c].flag = true
                    emtiaz++

                } else {

                    wrongA.play()
                    event.target.classList.remove('btn-dark')
                    event.target.classList.add('btn-danger')
                    responde.innerHTML = questions[counter].wrongA

                    for (let i = 0; i < gozinha.length; i++) {
                        if (gozinha[i].innerHTML === questions[counter].answer) {
                            gozinha[i].classList.remove('btn-dark')
                            gozinha[i].classList.add('btn-success')
                        }

                    }

                }

                c++

                setTimeout(() => {

                    make(questions, counter)
                    answer(questions, counter, level)

                }, 900);

            } else {
                step2.style.display = 'none'
                step3.style.display = 'flex'
                step3.style.flexDirection = 'column'
                step3.style.justifyContent = 'center';

                let emtiazA = Math.floor((emtiaz * 100) / 12)

                if (user.mode === 'hard') {

                    mode.innerHTML = 'سخت'

                    if (emtiazA >= 100) {
                        myComment.innerHTML = 'قطعا چنبار شرکت کردی شیطون 😂😂'
                    } else if (emtiazA > 75) {
                        myComment.innerHTML = 'شک نکن که میدونم کی هستی آفرین بر تو 😉😉'
                    } else if (emtiazA > 50) {
                        myComment.innerHTML = 'بدان و آگاه باش که راضیم ازت  😊😊'
                    } else if (emtiazA > 25) {
                        myComment.innerHTML = 'چون سوالا سخت بوده خوبه بد نیست 🤨🤨'
                    } else {
                        myComment.innerHTML = 'بهت هشدار دادم که خییلی سخته خودت گوش نکردی 😞😞'
                    }

                }
                if (user.mode === 'medium') {

                    mode.innerHTML = 'متوسط'

                    if (emtiazA >= 100) {
                        myComment.innerHTML = 'آفریییییین خیلی خوبه بورو تو سختم شرکت کن بینم اونجا چکار میکنی😍😍'
                    } else if (emtiazA > 75) {
                        myComment.innerHTML = 'خیلیم عالی باریکلا 👌👌'
                    } else if (emtiazA > 50) {
                        myComment.innerHTML = 'بدکش نیس یکم بیشتر باهام بگردی بهترم میشه 😁😁'
                    } else if (emtiazA > 25) {
                        myComment.innerHTML = 'چرااااا سوالا سخت نبود که 😟😟'
                    } else {
                        myComment.innerHTML = 'حتما توی وبینار حسین شناسی شرکت کن 😄😄'
                    }

                }
                if (user.mode === 'easy') {

                    mode.innerHTML = 'آسون'

                    if (emtiazA >= 100) {
                        myComment.innerHTML = 'بابا باریکلا بورو برای سطح متوسط بینم چ میکنی 😍😍'
                    } else if (emtiazA > 75) {
                        myComment.innerHTML = 'بهت امید دارم کرونا تموم شد بیشتر همو ببینیم 😁😁'
                    } else if (emtiazA > 50) {
                        myComment.innerHTML = 'انتظار داریما دیگه سوالا خیلی آسون بوده 😐😐'
                    } else if (emtiazA > 25) {
                        myComment.innerHTML = 'حتما توی وبینار حسین شناسی شرکت کن 😄😄'
                    } else {
                        myComment.innerHTML = 'نتنها منو نمیشناسی بد شانسم هسی 🤣🤣'
                    }

                }

                correct.innerHTML = emtiaz
                wrong.innerHTML = (12 - emtiaz)

                user.grade = emtiazA

                const circle = document.querySelector(".progress-bar__circle");
                let ps = document.querySelector('.ps')
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;

                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = circumference;

                function setProgress(percent) {
                    const offset = circumference - percent / 100 * circumference;
                    circle.style.strokeDashoffset = offset;
                }

                let i = 0;
                let time = setInterval(() => {

                    if (i < emtiazA) {
                        i++;
                        setProgress(i);
                        ps.innerHTML = `${i}%`
                    } else {
                        clearInterval(time)
                    }

                }, 10);


                console.log(user)

                let xhr = new XMLHttpRequest();

                xhr.open('POST', 'http://mhdarabi.ir/quiz/save.php')
                xhr.setRequestHeader('Content-type', "application/json; charset=UTF-8")
                xhr.send(JSON.stringify(user))

            }

            counter++

        })

    }

}

goEasy.addEventListener('click', function (event) {

    event.preventDefault()
    step1.style.display = 'none'
    step2.style.display = 'block'

    value('easy')

})

goMedium.addEventListener('click', function (event) {

    event.preventDefault()
    step1.style.display = 'none'
    step2.style.display = 'block'

    value('medium')

})

goHard.addEventListener('click', function (event) {

    event.preventDefault()
    step1.style.display = 'none'
    step2.style.display = 'block'

    value('hard')
})

let value = (val) => {

    counter

    switch (val) {
        case 'easy':

            document.querySelector('#backg').play()
            make(easy, 0)
            answer(easy, 0, 'easy')
            break;

        case 'medium':

            document.querySelector('#backg').play()
            make(medium, 0)
            answer(medium, 0, 'medium')
            break;

        case 'hard':
            document.querySelector('#backg').play()
            make(hard, 0)
            answer(hard, 0, 'hard')
            break;
    }

};