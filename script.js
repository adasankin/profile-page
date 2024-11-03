// Load data from localStorage
function loadData() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData) {
        document.getElementById('name').innerText = profileData.name || 'Nama Anda';
        document.getElementById('role').innerText = profileData.role || 'Front End Designer';
        document.getElementById('availability').innerText = profileData.availability || 'Full Time';
        document.getElementById('age').innerText = profileData.age || '19';
        document.getElementById('location').innerText = profileData.location || 'Jakarta';
        document.getElementById('yoe').innerText = profileData.yoe || '0';
        document.getElementById('email').innerText = profileData.email || 'email@gmail.com';
    }
}

function handleEdit() {
    // Show Section Form
    document.getElementById('section-form').classList.remove('d-none');

    // Populate the form with current data
    document.getElementById('form-name').value = document.getElementById('name').innerText;
    document.getElementById('form-role').value = document.getElementById('role').innerText;
    document.getElementById('form-availability').value = document.getElementById('availability').innerText;
    document.getElementById('form-age').value = document.getElementById('age').innerText;
    document.getElementById('form-location').value = document.getElementById('location').innerText;
    document.getElementById('form-yoe').value = document.getElementById('yoe').innerText;
    document.getElementById('form-email').value = document.getElementById('email').innerText;
}

function handleSubmit(event) {
    event.preventDefault();

    // Update Profile and Description
    const profileData = {
        name: document.getElementById('form-name').value,
        role: document.getElementById('form-role').value,
        availability: document.getElementById('form-availability').value,
        age: document.getElementById('form-age').value,
        location: document.getElementById('form-location').value,
        yoe: document.getElementById('form-yoe').value,
        email: document.getElementById('form-email').value,
    };

    // Save to localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Update Section Profile display
    loadData();

    // Hide Section Form After submission
    document.getElementById('section-form').classList.add('d-none');
}

function handleResume() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    // Resume Content
    const resumeText = `
        Perkenalkan nama saya <strong>${profileData.name || 'Nama Anda'}</strong>. Saya adalah seorang
        <strong>${profileData.role || 'Front End Designer'}</strong> <strong>${profileData.availability || 'Full Time'}</strong> 
        yang sangat bersemangat dan memiliki minat yang besar dalam bidang ini. Saat ini, saya berusia 
        <strong>${profileData.age || '19'}</strong> tahun, dan saya tinggal di <strong>${profileData.location || 'Jakarta'}
        </strong>. Selama perjalanan karier saya, saya telah memperoleh pengalaman berharga selama <strong>${profileData.yoe || '2'} 
        tahun</strong> di bidang ini. Jika Anda tertarik untuk berdiskusi lebih lanjut, jangan ragu untuk 
        menghubungi saya di <strong>${profileData.email || 'email@gmail.com'}</strong>.`
    ;

    // Add Resume Content in Section Resume
    document.getElementById('resume-content').innerHTML = resumeText;

    // Show Resume
    const resumeModal = new bootstrap.Modal(document.getElementById('resumeModal'));
    resumeModal.show();
}

// Load data on page
window.onload = loadData;