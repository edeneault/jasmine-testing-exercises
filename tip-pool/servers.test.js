describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should save long server names', () => {
    serverNameInput.value = "This is a long username";
    submitServerInfo();
    
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('This is a long username');
  });

  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
  });
});

describe("updateServerTable test (with set-up and tear down)", () => {

  it('markup should have tr appended to tbody', () => {
    //init
    serverNameInput.value = "JohnnyCash";
    serverName = serverNameInput.value;
    submitServerInfo();
    const innerDivValue = document.querySelector("#server1");
    //test
    expect(innerDivValue.firstChild.innerHTML).toEqual("JohnnyCash");
  });
  
  //clean-up
  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
  });
});

