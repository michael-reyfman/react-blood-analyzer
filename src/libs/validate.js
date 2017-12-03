const check = (inputRes, low, high) => {
    if(!inputRes) {
        return 'EMPTY';
    }
    if(inputRes < low) {
        return 'LOW';
    }
    else if(inputRes > high) {
        return 'HIGH';
    }
    else {
        return 'OK';
    }
};

const validate = (inputRes, lower, higher, age, gender) => {
    if(age <= 1) {
        return check(inputRes, lower[0], higher[0])
    }
    else if(age <= 30) {
        const lower_bound = lower[0] + (age - 1) * (lower[1] - lower[0]) / 30;
        const higher_bound = higher[0] + (age - 1) * (higher[1] - higher[0]) / 30;
        return check(inputRes, lower_bound, higher_bound);
    }
    else if(age <= 180) {
        const lower_bound = lower[1] + (age - 30) * (lower[2] - lower[1]) / (180 - 30);
        const higher_bound = higher[1] + (age - 30) * (higher[2] - higher[1]) / (180 - 30);
        return check(inputRes, lower_bound, higher_bound);
    }
    else if(age <= 365) {
        const lower_bound = lower[2] + (age - 180) * (lower[3] - lower[2]) / (365 - 180);
        const higher_bound = higher[2] + (age - 180) * (higher[3] - higher[2]) / (365 - 180);
        return check(inputRes, lower_bound, higher_bound);
    }
    else if(age < 7 * 365) {
        return check(inputRes, lower[4], higher[4]);
    }
    else if(age < 13 * 365) {
        return check(inputRes, lower[5], higher[5]);
    }
    else if(age < 16 * 365) {
        return check(inputRes, lower[6], higher[6]);
    }
    else {
        const male_check = check(inputRes, lower[7], higher[7]);
        const female_check = check(inputRes, lower[8], higher[8]);
        return gender === "MALE" ? male_check : female_check;
    }
};

export default validate;