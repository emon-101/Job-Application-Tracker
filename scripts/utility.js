// show one section
function showOne(id) {
    const jobs = document.getElementById('jobs-cards');
    const interviews = document.getElementById('interview-section');
    const rejections = document.getElementById('rejection-section');

    jobs.classList.add('hidden');
    interviews.classList.add('hidden');
    rejections.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}