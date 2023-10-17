//QuerySelector && QuerySelectorALL//

var secondListItem=document.querySelector('.list-group-item:nth-child(2)');
secondListItem.style.backgroundColor='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

const nodeList = document.querySelectorAll(".list-group-item")[1].style.Color='pink';


