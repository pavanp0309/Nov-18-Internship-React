useEffect : used for Handling the sideEffect in a functional Component 

sideEffect  : something that is done outside of react
   dom-manipulation (creating,adding text,styles deleting html)
   notification ,popup ,timers(coutdown times,stopwatch)
   fetching the data 
   Events (clicking the button ,loading the page etc)

class components : Life cycles methods (not required)
    componentDidMount
    componentDidUpdate
    componentDidUnmount

Syntax: useEffect(()=>{},[dependency])

LifeCycle Methods In a Functional Component
Mounting-Phase : create/inserting an  html in  Dom 
Updation-Phase : updating existing Html or a state  by comapring with virtual dom
UnMounting-Phase : Removing the Html or events attached in the dom 


Render : 
re-render :


USEEFFECT CASE SECENERIOS

Mounting phase : useEffect will run /excutes on mounting ,render and on Every -re-render
useEffect(()=>{})

updation Phase : useEffect will in two different ways : with empty Dependency & with depenedency
 empty Dependency
 useEffect(()=>{},[]) // it will run only once at mounting phase

 with Dependency
 useEffect(()=>{},[dependency]) // it run/excutes on every dependency change 


 unmounting phase

 useEffect(()=>{
    <!-- effect phase -->
    return  // cleaning phase // unmounting phase
 },[])
