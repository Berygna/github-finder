const github = new GitHub();
const ui = new UI();

// 사용자 검색 필드에 대한 참조
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', async (e) => {
  const userText = e.target.value;

  if (userText !== '') {
      // GitHub에서 사용자와 레포지토리 정보 가져오기
      github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
            ui.showAlert('사용자를 찾을 수 없습니다', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    ui.clearProfile();
  }
});