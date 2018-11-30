import {
  removeChildren,
} from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();

    const memberProfile = document.createElement('div');
    memberProfile.className = 'member-profile';

    const memberImageBox = document.createElement('div');
    memberImageBox.className = 'member-image-box';

    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.setAttribute('alt', thumbnailUrl);

    const nameTitle = document.createElement('h3');
    nameTitle.innerHTML = '名前';
    const memberName = document.createElement('p');
    memberName.className = 'member-name';
    memberName.innerHTML = name;
    const nameComment = document.createComment('会員の名前、たとえば「じじー」');


    const textTitle = document.createElement('h3');
    textTitle.innerHTML = '一言';
    const memberText = document.createElement('p');
    memberText.className = 'member-text';
    const textComment= document.createComment('会員の自己紹介');
  
    //memberProfile.appendChild(memberImageBox);

    memberImageBox.appendChild(img);
    memberProfile.appendChild(memberImageBox);
    memberProfile.appendChild(nameTitle);
    memberName.appendChild(nameComment);
    memberProfile.appendChild(memberName);
    memberProfile.appendChild(textTitle);
    memberText.appendChild(textComment);
    memberProfile.appendChild(memberText);

    this.rootEl.appendChild(memberProfile);

    const nextButton = document.createElement('button');
    nextButton.className = 'btn-next-member';
    nextButton.innerHTML = '次へ';

    this.rootEl.appendChild(nextButton);
    
    /*
      TODO: 動的にDOM要素を作成して、
      "#container"というidを持つDIV要素の子要素として追加してください...

        <div class="member-profile">
          <div class="member-image-box">
            <img src="" alt="(会員のイメージ)">
          </div>
          <h3>名前</h3>
          <p class="member-name">
            <!-- 会員の名前、たとえば「じじー」-->
          </p>
          <h3>一言</h3>
          <p class="member-text">
            <!-- 会員の自己紹介 -->
          </p>
        </div>
        <button class="btn-next-member">次へ</button>
    */
  }
}

export default BrowseMembersView;
