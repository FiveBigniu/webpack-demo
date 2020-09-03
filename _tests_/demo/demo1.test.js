function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
        callback(flavour);
    }
}

//toHaveBeenCalled  测试确保某个函数被调用 alias: .toBeCalled()  
describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toBeCalled();
    });

    test('does not drink something octopus-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
    });
});

//expect.anything() -- matches anything but null or undefined
test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
});

//异步测试
test('resolves to lemon', async () => {
    await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

//toHaveReturned  函数 返回值为true  alias: .toReturn()
test('drinks returns', () => {
    const drink = jest.fn(() => true);
    drink();
    expect(drink).toHaveReturned();
});

//toHaveReturnedWith 函数 执行后的具体返回值 alias: .toReturnWith(value)
test('drink returns La Croix', () => {
    const beverage = { name: 'La Croix' };
    const drink = jest.fn(beverage => beverage.name);

    drink(beverage);
    expect(drink).toHaveReturnedWith('La Croix');
});

//toBeDefined 函数 有返回值 null,false也包括在内
test('there is a new flavor idea', () => {
    const drink = jest.fn(() => null);
    expect(drink()).toBeDefined();
});

//toContain 函数 确定数组或字符串中包含这个
test('the flavor list contains lime', () => {
    const drink = jest.fn(() => 'lime');
    expect(drink()).toContain('lime');
});


// test('is delicious and not sour', () => {
//     const myBeverages = jest.fn(() => ({ delicious: true, sour: true }));
//     const myBeverage = { delicious: true, sour: true };
//     expect(myBeverages()).toContainEqual(myBeverage);
// });

//toHaveLength 检查对象是否具有length属性
test('arr', () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);
    // expect(null).toHaveLength(1);
})

//toMatchObject match对象 
describe('toMatchObject applied to arrays', () => {
    test('the number of elements must match exactly', () => {
        expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([{ foo: 'bar' }, { baz: 1 }]);
    });
    test('the number of elements must match exactly', () => {
        expect({ foo: 'bar' }).toMatchObject({ foo: 'bar' });
    });

    test('.toMatchObject does not allow extra elements', () => {
        expect([{ foo: 'bar' }, { baz: 1 }]).not.toMatchObject([{ foo: 'bar' }]);
    });
    //关键是这种用法 ~~
    test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
        expect([{ foo: 'bar' }, { baz: 1, extra: 'quux' }]).toMatchObject([
            { foo: 'bar' },
            { baz: 1 },
        ]);
    });
});


const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
        'nice.oven': true,
    },
    'ceiling.height': 2,
};

//toHaveProperty 检查对象的这个属性是否存在 或 值是否正确
test('this house has my desired features', () => {
    expect(houseForSale).toHaveProperty('bath');
    expect(houseForSale).toHaveProperty('bedrooms', 4);
    expect(houseForSale).toHaveProperty('kitchen.area', 20);

    expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
    expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
    expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
    // expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
});