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
    // get the badge and card
    const badge = document.getElementById(id);
    const mainCard = document.getElementById(card);

    // get the interview section
    const interviewSection = document.getElementById('interview-section');

    // interview count section
    const interviewCount = document.getElementById('interview-count');
    const rejectedCount = document.getElementById('rejected-count');

    // check the card is already exist or not
    if(mainCard.dataset.status === 'interview') {
        return;
    }
    if(mainCard.dataset.status === 'rejected') {
        const oldClone = document.getElementById(card + 'Cloned');
        if(oldClone) {
            oldClone.remove();
        }
        rejectedCount.innerText--;
    }

    // set the badge
    badge.innerText = 'INTERVIEW';
    badge.classList.add('bg-green-600', 'text-white');
    badge.classList.remove('bg-red-600');

    // copy the main card and append it into interview section
    const cloneCard = mainCard.cloneNode(true);
    cloneCard.id = card + 'Cloned';

    // append the card in interview section
    interviewSection.appendChild(cloneCard);
    mainCard.dataset.status = 'interview';

    // count the interview section card
    interviewCount.innerText = interviewSection.children.length - 1;

    // hide the default interview display
    const defaultInterview = document.getElementById('default-interview');

    if(interviewSection.children.length > 0) {
        defaultInterview.classList.add('hidden');
    } else {
        defaultInterview.classList.remove('hidden');
    }
}
function rejectedClick(id, card) {
    // get the badge and card
    const badge = document.getElementById(id);
    const mainCard = document.getElementById(card);

    // get the interview section
    const rejectionSection = document.getElementById('rejection-section');

    // interview count section
    const interviewCount = document.getElementById('interview-count');
    const rejectedCount = document.getElementById('rejected-count');

    // check the card is already exist or not
    if(mainCard.dataset.status === 'rejected') {
        return;
    }
    if(mainCard.dataset.status === 'interview') {
        const oldClone = document.getElementById(card + 'Cloned');
        if(oldClone) {
            oldClone.remove();
        }
        interviewCount.innerText--;
    }

    // set the badge
    badge.innerText = 'REJECTED';
    badge.classList.add('bg-red-600', 'text-white');
    badge.classList.remove('bg-green-600');

    // copy the main card and append it into interview section
    const cloneCard = mainCard.cloneNode(true);
    cloneCard.id = card + 'Cloned';

    // append the card in rejection section
    rejectionSection.appendChild(cloneCard);
    mainCard.dataset.status = 'rejected';

    // count the rejected section card
    rejectedCount.innerText = rejectionSection.children.length - 1;

    // hide the default rejection display
    const defaultRejection = document.getElementById('default-rejection');

    if(rejectionSection.children.length > 0) {
        defaultRejection.classList.add('hidden');
    } else {
        defaultRejection.classList.remove('hidden');
    }
}

// Delete button
function deleteBtn(id) {
    const mainCard = document.getElementById(id);
    mainCard.remove();
    const totalCount = document.getElementById('total-count');
    totalCount.innerText--;
    const totalJobs = document.getElementById('available-job-count');
    totalJobs.innerText--;
}