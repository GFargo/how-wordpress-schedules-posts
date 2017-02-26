<Slide transition={["slide"]} bgColor="black">
    <Image src={images.badpuns_gif.replace("/", "")} margin="0px auto 40px" height="320px"/>
    <Appear fid="1">
      <Heading size={1} caps textColor="primary" textFont="primary">
         What to Expect...
      </Heading>
    </Appear>
</Slide>

<Slide transition={["slide"]} bgColor="black" notes="Git Log">
    <Heading size={1} caps textColor="primary" textFont="primary">
        "I need to look back through the commit history"
    </Heading>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
    <Layout>
        <Fill align="left">
            <Heading size={6} textAlign="left" margin="32px auto" caps textColor="tertiary" textFont="primary">
                The CLI method
                <Image src={images.classic_gif.replace("/", "")} margin="16px auto"/>
            </Heading>
        </Fill>
        <Fill>
            <CodePane
                lang="bash"
                source={require("raw!../assets/code/git-log.example")}
            />
        </Fill>
    </Layout>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Graph">
    <CodePane
        lang="bash"
        margin="20px auto"
        source={require("raw!../assets/code/git-log-graph.example")}
    />
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="black">
    <Heading size={1} caps fit textColor="primary" textFont="primary">
        A few Advantages of a GUI
    </Heading>
    <Layout>
        <Fill>
            <Image transition={["fade", "zoom"]} src={images.contender_gif.replace("/", "")} margin="40px auto 0" height="320"/>
        </Fill>
        <Fill>
            <Image transition={["fade", "zoom"]} src={images.gitkraken_logo.replace("/", "")} margin="40px auto 0" height="320"/>
        </Fill>
    </Layout>
</Slide>




<Slide transition={["slide"]} bgColor="black" notes="Breaking Apart Work">
    <Image src={images.unwind_gif.replace("/", "")} margin="0px auto 40px" height="275px"/>
    <Heading size={4} caps textColor="primary" textFont="primary">
        "I was caught in a coding trance and now have a 16 files to stage..."
    </Heading>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="black" notes="Breaking Apart Work">
    <Image src={images.stageallthethings.replace("/", "")} margin="0px auto 40px" height="320px"/>
    <CodePane
        margin="20px auto"
        source={require("raw!../assets/code/git-add.example")}
    />
    <Heading size={1} caps textColor="primary" textFont="primary">
        🤔
    </Heading>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
    <Layout>
        <Fill>
            <CodePane
                lang="bash"
                source={require("raw!../assets/code/git-add-patch.example")}
            />
        </Fill>
        <Fill align="left">
            <Heading textSize={36} caps textColor="white" textAlign="right" padding="0 0 0 20px" textFont="primary">
                Git patch steps through each change individually, allowing you to stage only what is important.
            </Heading>

        </Fill>
    </Layout>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
    <Layout>
        <Fill>
            <CodePane
                lang="bash"
                source={require("raw!../assets/code/git-add-interactive.example")}
            />
        </Fill>
        <Fill textAlign="right">
            <Heading textSize={36} caps textColor="white" textAlign="right" padding="0 0 0 20px" textFont="primary">
                --interactive (or -i) is the big brother of --patch.  patch only lets you decide about the individual hunks in files whereas interactive enters the interactive mode.
            </Heading>
            <Link textAlign="right" textColor="white" href="http://nuclearsquid.com/writings/git-add/">Nuclear Squid</Link>
        </Fill>
    </Layout>
</Slide>






<Slide transition={["slide"]} bgColor="black" notes="Merge Conflicts">
    <Heading size={1} caps textColor="primary" textFont="primary">
        "Always running into conflicts when I'm trying to merge my work..."
    </Heading>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="black">
    <Heading size={6} caps textColor="primary" textFont="primary">
        1. take time to understand what is happening.
    </Heading>
    <Heading size={6} caps textColor="primary" textFont="primary">
        2. use the tool you feel most comfortable with.
    </Heading>
    <Heading margin="0 auto 32px" size={5} caps textColor="primary" textFont="primary">
        3. when in doubt recompile.
    </Heading>
    <Layout>
        <Fill>
            <CodePane
                lang="bash"
                margin="20px auto"
                source={require("raw!../assets/code/git-log-merge.example")}
            />
        </Fill>
        <Fill>
            <BlockQuote>
                <Quote textSize={24} fit caps textColor="white">
                    Displays all of the commits that touched that file in between the common ancestor and the two heads you are merging.
                </Quote>
                <Cite textColor="white" textSize={14}>
                    <Link textColor="white" href="http://stackoverflow.com/a/7589612/1731759">Peter Mortensen @ S.O.</Link>
                </Cite>
            </BlockQuote>
        </Fill>
    </Layout>
</Slide>




<Slide transition={["slide"]} bgColor="black" notes="Creating a PR">
    <Heading size={1} caps textColor="primary" textFont="primary">
        "I want to create a new PR"
    </Heading>
</Slide>

<Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Graph">
    <Layout>
        <Fill>
            <Heading size={6} textAlign="left" caps padding="0 24px 0 0" textColor="tertiary" textFont="primary">
                open a compare against the current branch on github
            </Heading>
        </Fill>
        <Fill>
            <CodePane
                lang="bash"
                source={require("raw!../assets/code/git-cpr.example")}
            />
        </Fill>
    </Layout>
</Slide>






<Slide transition={["slide"]} bgColor="black" notes="Multiple Remotes">
    <Heading size={1} caps textColor="primary" textFont="primary">
"Interacting with multiple remotes"
    </Heading>
</Slide>

<Slide transition={["spin", "slide"]} bgColor="tertiary">
    <Heading size={1} caps textColor="primary" textFont="primary">
        Additional Resources
    </Heading>
    <List>
        <ListItem><Link href="https://gitkraken.com">GitKraken Website</Link></ListItem>
        <ListItem><Link href="https://githowto.com">GitHowTo.com</Link></ListItem>
        <ListItem><Link href="http://ohshitgit.com/">OhSh*tGit.com</Link></ListItem>
        <ListItem><Link href="https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh">oh-my-zsh git plugin</Link></ListItem>
        <ListItem><Link href="http://codetunnel.io/tips-for-working-with-git/">CodeTunnel: Tips for Working with Git</Link></ListItem>
        <ListItem><Link href="https://github.com/git-tips/tips">@git-tips: tips</Link></ListItem>
        <ListItem><Link href="https://github.com/arslanbilal/git-cheat-sheet">@arslanbilal: git cheat sheet</Link></ListItem>
    </List>
</Slide>

<Slide transition={["spin", "slide"]} bgColor="tertiary">
    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
    Thanks!
    </Heading>
    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
    Discussion?
    </Heading>
</Slide>
