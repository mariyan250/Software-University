function solve(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
        obj.dizziness = !obj.dizziness;
    }

    return obj;
}