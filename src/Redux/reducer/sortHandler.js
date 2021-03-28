export const nameDiscending = (a, b) => {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
    
    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}

export const nameAscending = (a, b) => {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
    
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}
export const idDiscending = (a, b) => {
    const bandA = a.id;
    const bandB = b.id;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}

export const idAscending = (a, b) => {
    const bandA = a.id;
    const bandB = b.id;

    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}

export const ageDiscending = (a, b) => {
    const bandA = a.age;
    const bandB = b.age;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}

export const ageAscending = (a, b) => {
    const bandA = a.age;
    const bandB = b.age;

    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;
}

export const filterByText = (name, value) => {
    
}