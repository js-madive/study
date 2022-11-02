// 타입스크립트는 변수 지정 했을 때 타입 쓰지 않아도 타입지정 자동으로 됨

const 이름 :{ name?:string } = { name:'kim'};
// ? = 옵션(name 속성이 있을수도 없을수도)

let 이름2 :string | number = 123;
// string or number | union type
// union type, unknown 변수는 연산 되지 않음

type 내타입 = string | number;
let 이름3 :내타입 = 123;
// 타입 변수로 선언

let 회원들 :string[] = ['kim', 'park']
// 배열에 string 객체만 작성 가능

let 회원목록 :{member1:string, member2:number} = { member1 : 'kim', member2 : 123}
// ogject 자료에 타입 지정

function 함수(x:number) :number {
    return x * 2;
}
함수(123);
// 파라미터x=number, return값=number

type Member = [number, boolean];
let john:Member = [123, true];
// 첫번째객체는 number, 두번째객체는 boolean

type Member2 = {
    [key:string] : string, // key=모든속성 / 글자로 된 모든 object 속성의 타입=string
}
let john2:Member2 = {name:'kim', age:'23'} 

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}


// 변수에 자료형 설정하여 담기
type mmm = {[key:string]:string}
let song:mmm = {sson:'이름', artist:'가수'}

// 자료 여러개 타입지정하기
type tt = {
    member:string[],
    days:number,
    started:boolean 
}

let ttt:tt = {member : ['123', 'ss'], days: 5, started: true}

// ex2 변수로 선언
let tt2 :{
    member2:string[],
    days2:number,
    started2:boolean 
} = {
    member2 : ['123', 'ss'], 
    days2: 5, 
    started2: true
}

// 함수에 타입 지정
// 변수 생성하고 아무것도 지정하지 않으면 any 자동 지정
// x? :number = 파라미터가 옵션일 경우 == number | undefined 와 동일
function 함수타입(x :number /*x? :number*/) :void { // void : return 사용하지 않을 때 사용 , 실수로 return 하는 것을 방지
    x * 2
}

함수타입(2) // 함수에 파라미터 타입 지정된 함수는 실행할 때 파라미터 삽입 필수

// 에러나는 이유??
// string + number : 가능, number + number : 가능, 하지만 -> x 는 지금 union 타입이기 때문에 오류 발생
// 조건으로 number 일 때만 연산 하도록 걸어줘야 함 => Type Narrowing
function 함수타입2(x :number | string) :void {
    //console.log(x + 3)
    if (typeof x === 'string') { // Type Narrowing (typeof)
        console.log(x + '3')
    } else {
        console.log(x + 3)
    }
}
함수(2)

function 함수narrowing(x :number | string) {
    let array :number[] = [];  // 배열 컨트롤
    if (typeof x === 'number') {
        array[0] = x;
    } else {} // if문은 끝까지 작성해야 안전함

    // Narrowing으로 판정해주는 문법들
    // [typeof] 변수
    // 속성명 [in] 오브젝트자료
    // 인스턴스 [instanceof] 부모
}
함수narrowing(123);

function 함수assertion(x :number | string) {
    let array :number[] = [];
    array[0] = x as number; 
    // assertion 문법 => 왼쪽에 있는 변수를 number로 덮어씀
    // assertion 문법의 용도 
    //    1. Narrowing (타입 변경 X)
    //    2. 무슨 타입이 들어올지 100% 확실할 때 사용
    //    3. 에러나는 이유 모르겠을 때 비상용
}
함수assertion(123);

// 연습

let 회원회원 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{a : string | number} = {a:123}

let 모든타입 :any; // 타입실드 해제 문법
let 모든타입2 :unknown; // any와 유사하지만 실드 해제되지 않음

let u1:string = 'kim';
let a1:undefined | number = undefined;
let m1:boolean = false;
let 철수:(string|number|undefined|boolean)[] = [u1, a1, m1];

let 학교: {
    score:(number | boolean)[],
    teacher:string,
    friend:string[] | string
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John' 
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

// 과목 1개만 가르치는 선생님은 문자로, 2개 이상 가르치는 선생님은 array로 저장
// 과목이 1개일때 그 과목 return, 2개 이상일때는 리스트 마지막 과목 return
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목함수(teacher :{subject :string | string[]}) {
    if(typeof teacher.subject === 'string') {
        console.log('type string : ' + teacher.subject);
    } else if(Array.isArray(teacher.subject) === true) {
        console.log('type string[] : ' + teacher.subject[(teacher.subject.length) - 1]);
    } else {
        console.log('type 해당없음');
    }
}

과목함수({ subject : 'math' });
과목함수({ subject : ['science', 'art', 'korean'] });
과목함수(영희쌤);