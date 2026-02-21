// show one section
function showOne(id, btn) {
    const jobs = document.getElementById('jobs-cards');
    const btnJobs = document.getElementById('btn-jobs')
    const interviews = document.getElementById('interview-section');
    const btnInterview = document.getElementById('btn-interview');
    const rejections = document.getElementById('rejection-section');
    const btnRejection = document.getElementById('btn-rejection');

    jobs.classList.add('hidden');
    btnJobs.classList.remove('btn-primary');
    interviews.classList.add('hidden');
    btnInterview.classList.remove('btn-primary');
    rejections.classList.add('hidden');
    btnRejection.classList.remove('btn-primary');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
    const selectedBtn = document.getElementById(btn);
    selectedBtn.classList.add('btn-primary');
}

// card section
function interviewClick(id, card) {
    const badge = document.getElementById(id);
    const addCard = document.getElementById(card);
    badge.innerText = 'INTERVIEW';
    badge.classList.add('bg-green-600');
    badge.classList.remove('bg-red-600');
    badge.classList.add('text-white');

    const interviewCount = document.getElementById('interview-count');
    const interviewCountValue = interviewCount.innerText;
    let newCount = Number(interviewCountValue) + 1;
    interviewCount.innerText = newCount;

    const interviewSection = document.getElementById('interview-section');
    const defaultInterview = document.getElementById('default-interview');
    if(newCount > 0) {
        defaultInterview.classList.add('hidden');
    } else {
        defaultInterview.classList.remove('hidden');
    }
    
    const clonedCard = addCard.cloneNode(true);
    interviewSection.appendChild(clonedCard);
    
}
function rejectedClick(id, card) {
    const badge = document.getElementById(id);
    const addCard = document.getElementById(card);
    badge.innerText = 'REJECTED';
    badge.classList.add('bg-red-600');
    badge.classList.remove('bg-green-600');
    badge.classList.add('text-white');

    const rejectedCount = document.getElementById('rejected-count');
    const rejectedCountValue = rejectedCount.innerText;
    let newCount = Number(rejectedCountValue) + 1;
    rejectedCount.innerText = newCount;

    const rejectionSection = document.getElementById('rejection-section');
    const defaultRejection = document.getElementById('default-rejection');
    if(newCount > 0) {
        defaultRejection.classList.add('hidden');
    } else {
        defaultRejection.classList.remove('hidden');
    }
    
    const clonedCard = addCard.cloneNode(true);
    rejectionSection.appendChild(clonedCard);
}