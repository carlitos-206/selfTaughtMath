//  This is intended to be a reasurance of the math I have done
// This is only exploring page #7 

//  to square a function ie raise to a 'n' power you need '**' operator ie 1^2 == 1**2

//  single Var calc. This is intended for 1 dimendional graphs ie y = mx (+ or -) b
//  equation
//  f(x) =  -(x^2) + 3(x) + 2

// tuple is non-existent in JS therefore we can create a frozen array to simulate a tupple
// syntax: Object.freeze(array)
// when array is frozen it has the same behavior as a tupple -> immutable


// this function only console logs a single output -> O(1)
const singleVar_single_output = (x) =>{
  let y = Object.freeze([x, (-(x**2) + (3*x)) + 2])
  console.log(y)
}

// this function is dependent on the "n" amount of outputs -> O(n)
const singleVar_n_output = (n) =>{
  for(let i = 0 ; i<n ; i++){
    let y = Object.freeze([i, (-(i**2) + (3*i) +2 )])
    console.log(y)
    }
  }
// singleVar_single_output(1)
// singleVar_n_output(10)



// multi var calc. This are points that will be passed on a 3D graph
// equation
// f(x,y) = ( ((x-2)^2) + ((y-2)^2) + 2 )

// since this function does a single computation -> O(1)
const multiVar_single_output = (x,y) =>{
  let z = Object.freeze([x, y, (((x-2)**2)+ ((y-2)**2) + 2 )])
  console.log(z)
}

// this function has to iterate through each value n^2 -> O(n^2)
const multiVar_n_output = (n) =>{
  for(let x = 0; x < n; x++){
    for(let y = 0; y < n; y++){
      let z = Object.freeze([x,y, ( ((x-2)**2) + ((y-2)**2) + 2 )])
      console.log(z)
    }
  }
}


// multiVar_single_output(0,0)
// multiVar_n_output(10)