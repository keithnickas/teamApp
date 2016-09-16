// Login/Out, Registration & Navigation Buttons
function navigation()
{
  $('.navButton').mouseenter(
    function()
    {
      $(this).removeClass('hollow');
    }
  ).mouseleave(
    function()
    {
      $(this).addClass('hollow');
    }
  );
}

/*
  Add Users Form
  TODO: bind validation before closing form.
*/

function addUserForm()
{
  $('#addUserButton').click(
    function()
    {
      $('.newUser').removeClass('active');
      $('.addUser').removeClass('active').addClass('hide');
    }
  );
}

function addUser()
{
  $('.newUser').click(
    function()
    {
      if($('.addUser').hasClass('hide'))
      {
        $(this).addClass('active');
        $('.addUser').addClass('active').removeClass('hide');
      }
      else
      {
        $(this).removeClass('active');
        $('.addUser').removeClass('active').addClass('hide');
      }
    }
  );
  $('.cancelButton').click(
    function()
    {
      if($('.addUser').hasClass('active'))
      {
        $('.newUser').removeClass('active');
        $('.addUser').removeClass('active').addClass('hide');
      }
    }
  );
}


function addTeamForm()
{
  $('#addTeamButton').click(
    function()
    {
      $('.newTeam').removeClass('active');
      $('.addTeam').removeClass('active').addClass('hide');
    }
  );
}

function addTeam()
{
  $('.newTeam').click(
    function()
    {
      if($('.addTeam').hasClass('hide'))
      {
        $(this).addClass('active');
        $('.addTeam').addClass('active').removeClass('hide');
      }
      else
      {
        $(this).removeClass('active');
        $('.addTeam').removeClass('active').addClass('hide');
      }
    }
  );
  $('.cancelButton').click(
    function()
    {
      if($('.addTeam').hasClass('active'))
      {
        $('.newTeam').removeClass('active');
        $('.addTeam').removeClass('active').addClass('hide');
      }
    }
  );
}
