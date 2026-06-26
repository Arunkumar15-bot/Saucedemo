import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("Before all");
})

test.afterAll(async()=>{
    console.log("After all");
})

test.beforeEach(async()=>{
    console.log("Before each");
})

test.afterEach(async()=>{
    console.log("After each");
})

test.describe('Group 1', () => {
    
    test('Test 1', async ({page}) => {
        console.log("Test 1");
    })
   
    test('Test 3', async ({page}) => {
        console.log("Test 3");
    })
})

test.describe('Group 2', () => {
    
    test('Test 2', async ({page}) => {
        console.log("Test 2");
    })
   
    test('Test 4', async ({page}) => {
        console.log("Test 4");
    })
})