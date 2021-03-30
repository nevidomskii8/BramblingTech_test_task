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

const idDiscending = (a, b) => {
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

const idAscending = (a, b) => {
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

export const handleFilter = (param, state) => {
    const { sortParams, sort } = param
    let filterteredState = [...state]
    switch (sortParams) {
        case 'id':
            sort === 'discending'
                ? filterteredState = filterteredState.sort(idAscending)
                : filterteredState = filterteredState.sort(idDiscending)

            break;
        case 'name':
            sort === 'discending'
                ? filterteredState = filterteredState.sort(nameAscending)
                : filterteredState = filterteredState.sort(nameDiscending)
            break;
        case 'age':
            sort === 'discending'
                ? filterteredState = filterteredState.sort(ageAscending)
                : filterteredState = filterteredState.sort(ageDiscending)
            break;
        default: return filterteredState
    }
    return filterteredState
}