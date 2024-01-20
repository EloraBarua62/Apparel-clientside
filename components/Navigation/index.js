import allNavigation from "./Navigation";


const getNavigation = (role) => {
    const navArray = [];

    for(let i=0 ; i< allNavigation.length ; i++){
        if(role === allNavigation[i].role)
            navArray.push(allNavigation[i]);
    }

    return navArray;
}

export default getNavigation;