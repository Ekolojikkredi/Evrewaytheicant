document.getElementById('waste-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const wasteType = document.getElementById('waste-type').value;
    const wasteWeight = parseFloat(document.getElementById('waste-weight').value);
    const isSorted = document.getElementById('sorted').value === 'evet';
    const recordedBy = document.getElementById('recorded-by').value;

    let credit = 0;
    const wastePoints = {
        plastik: 5,
        kağıt: 3,
        pil: 10,
        elektronik: 20,
        cam: 4,
        yağ: 15,
        tekstil: 8
    };

    if (isSorted) {
        credit = wastePoints[wasteType] * wasteWeight;
    } else {
        credit = (wastePoints[wasteType] * wasteWeight) / 2; // Ayrıştırılmayan atıkta puan azalır
    }

    updateStudentData(credit);
});

function updateStudentData(credit) {
    let totalPoints = parseFloat(document.getElementById('total-points').innerText) + credit;
    document.getElementById('total-points').innerText = totalPoints.toFixed(2);

    const title = getTitleByPoints(totalPoints);
    document.getElementById('title').innerText = title;
}

function getTitleByPoints(points) {
    if (points >= 1000) return 'Çevre Kahramanı';
    if (points >= 500) return 'Doğa Dostu';
    if (points >= 100) return 'Yeşil Savaşçı';
    return 'Başlangıç';
}
