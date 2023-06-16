# `github_repository`

Refer to the Terraform Registory for docs: [`github_repository`](https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository).

# `repository` Submodule <a name="`repository` Submodule" id="@cdktf/provider-github.repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Repository <a name="Repository" id="@cdktf/provider-github.repository.Repository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository github_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.Repository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.Repository;

Repository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowAutoMerge(java.lang.Boolean)
//  .allowAutoMerge(IResolvable)
//  .allowMergeCommit(java.lang.Boolean)
//  .allowMergeCommit(IResolvable)
//  .allowRebaseMerge(java.lang.Boolean)
//  .allowRebaseMerge(IResolvable)
//  .allowSquashMerge(java.lang.Boolean)
//  .allowSquashMerge(IResolvable)
//  .allowUpdateBranch(java.lang.Boolean)
//  .allowUpdateBranch(IResolvable)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .archiveOnDestroy(java.lang.Boolean)
//  .archiveOnDestroy(IResolvable)
//  .autoInit(java.lang.Boolean)
//  .autoInit(IResolvable)
//  .defaultBranch(java.lang.String)
//  .deleteBranchOnMerge(java.lang.Boolean)
//  .deleteBranchOnMerge(IResolvable)
//  .description(java.lang.String)
//  .gitignoreTemplate(java.lang.String)
//  .hasDiscussions(java.lang.Boolean)
//  .hasDiscussions(IResolvable)
//  .hasDownloads(java.lang.Boolean)
//  .hasDownloads(IResolvable)
//  .hasIssues(java.lang.Boolean)
//  .hasIssues(IResolvable)
//  .hasProjects(java.lang.Boolean)
//  .hasProjects(IResolvable)
//  .hasWiki(java.lang.Boolean)
//  .hasWiki(IResolvable)
//  .homepageUrl(java.lang.String)
//  .id(java.lang.String)
//  .ignoreVulnerabilityAlertsDuringRead(java.lang.Boolean)
//  .ignoreVulnerabilityAlertsDuringRead(IResolvable)
//  .isTemplate(java.lang.Boolean)
//  .isTemplate(IResolvable)
//  .licenseTemplate(java.lang.String)
//  .mergeCommitMessage(java.lang.String)
//  .mergeCommitTitle(java.lang.String)
//  .pages(RepositoryPages)
//  .private(java.lang.Boolean)
//  .private(IResolvable)
//  .securityAndAnalysis(RepositorySecurityAndAnalysis)
//  .squashMergeCommitMessage(java.lang.String)
//  .squashMergeCommitTitle(java.lang.String)
//  .template(RepositoryTemplate)
//  .topics(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
//  .vulnerabilityAlerts(java.lang.Boolean)
//  .vulnerabilityAlerts(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowAutoMerge">allowAutoMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowMergeCommit">allowMergeCommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowRebaseMerge">allowRebaseMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowSquashMerge">allowSquashMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowUpdateBranch">allowUpdateBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.autoInit">autoInit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.deleteBranchOnMerge">deleteBranchOnMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.gitignoreTemplate">gitignoreTemplate</a></code> | <code>java.lang.String</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDiscussions">hasDiscussions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDownloads">hasDownloads</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasIssues">hasIssues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasProjects">hasProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasWiki">hasWiki</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.ignoreVulnerabilityAlertsDuringRead">ignoreVulnerabilityAlertsDuringRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.licenseTemplate">licenseTemplate</a></code> | <code>java.lang.String</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitMessage">mergeCommitMessage</a></code> | <code>java.lang.String</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitTitle">mergeCommitTitle</a></code> | <code>java.lang.String</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.private">private</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.securityAndAnalysis">securityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitMessage">squashMergeCommitMessage</a></code> | <code>java.lang.String</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitTitle">squashMergeCommitTitle</a></code> | <code>java.lang.String</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#name Repository#name}

---

##### `allowAutoMerge`<sup>Optional</sup> <a name="allowAutoMerge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowAutoMerge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `allowMergeCommit`<sup>Optional</sup> <a name="allowMergeCommit" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowMergeCommit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `allowRebaseMerge`<sup>Optional</sup> <a name="allowRebaseMerge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowRebaseMerge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `allowSquashMerge`<sup>Optional</sup> <a name="allowSquashMerge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowSquashMerge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `allowUpdateBranch`<sup>Optional</sup> <a name="allowUpdateBranch" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowUpdateBranch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#archived Repository#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.archiveOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `autoInit`<sup>Optional</sup> <a name="autoInit" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.autoInit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.defaultBranch"></a>

- *Type:* java.lang.String

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `deleteBranchOnMerge`<sup>Optional</sup> <a name="deleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.deleteBranchOnMerge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#description Repository#description}

---

##### `gitignoreTemplate`<sup>Optional</sup> <a name="gitignoreTemplate" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.gitignoreTemplate"></a>

- *Type:* java.lang.String

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `hasDiscussions`<sup>Optional</sup> <a name="hasDiscussions" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDiscussions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `hasDownloads`<sup>Optional</sup> <a name="hasDownloads" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDownloads"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `hasIssues`<sup>Optional</sup> <a name="hasIssues" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasIssues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `hasProjects`<sup>Optional</sup> <a name="hasProjects" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasProjects"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `hasWiki`<sup>Optional</sup> <a name="hasWiki" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasWiki"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.homepageUrl"></a>

- *Type:* java.lang.String

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreVulnerabilityAlertsDuringRead`<sup>Optional</sup> <a name="ignoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.ignoreVulnerabilityAlertsDuringRead"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.isTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#is_template Repository#is_template}

---

##### `licenseTemplate`<sup>Optional</sup> <a name="licenseTemplate" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.licenseTemplate"></a>

- *Type:* java.lang.String

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#license_template Repository#license_template}

---

##### `mergeCommitMessage`<sup>Optional</sup> <a name="mergeCommitMessage" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitMessage"></a>

- *Type:* java.lang.String

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `mergeCommitTitle`<sup>Optional</sup> <a name="mergeCommitTitle" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitTitle"></a>

- *Type:* java.lang.String

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.pages"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#pages Repository#pages}

---

##### `private`<sup>Optional</sup> <a name="private" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.private"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#private Repository#private}.

---

##### `securityAndAnalysis`<sup>Optional</sup> <a name="securityAndAnalysis" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.securityAndAnalysis"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `squashMergeCommitMessage`<sup>Optional</sup> <a name="squashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitMessage"></a>

- *Type:* java.lang.String

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `squashMergeCommitTitle`<sup>Optional</sup> <a name="squashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitTitle"></a>

- *Type:* java.lang.String

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#template Repository#template}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.topics"></a>

- *Type:* java.util.List<java.lang.String>

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#topics Repository#topics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#visibility Repository#visibility}

---

##### `vulnerabilityAlerts`<sup>Optional</sup> <a name="vulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.vulnerabilityAlerts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repository.Repository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repository.Repository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putPages">putPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis">putSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowAutoMerge">resetAllowAutoMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowMergeCommit">resetAllowMergeCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge">resetAllowRebaseMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowSquashMerge">resetAllowSquashMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch">resetAllowUpdateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy">resetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAutoInit">resetAutoInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge">resetDeleteBranchOnMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetGitignoreTemplate">resetGitignoreTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDiscussions">resetHasDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDownloads">resetHasDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasIssues">resetHasIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasProjects">resetHasProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasWiki">resetHasWiki</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead">resetIgnoreVulnerabilityAlertsDuringRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIsTemplate">resetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetLicenseTemplate">resetLicenseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitMessage">resetMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitTitle">resetMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPages">resetPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPrivate">resetPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis">resetSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage">resetSquashMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle">resetSquashMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts">resetVulnerabilityAlerts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.Repository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repository.Repository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repository.Repository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repository.Repository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repository.Repository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPages` <a name="putPages" id="@cdktf/provider-github.repository.Repository.putPages"></a>

```java
public void putPages(RepositoryPages value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `putSecurityAndAnalysis` <a name="putSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis"></a>

```java
public void putSecurityAndAnalysis(RepositorySecurityAndAnalysis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-github.repository.Repository.putTemplate"></a>

```java
public void putTemplate(RepositoryTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `resetAllowAutoMerge` <a name="resetAllowAutoMerge" id="@cdktf/provider-github.repository.Repository.resetAllowAutoMerge"></a>

```java
public void resetAllowAutoMerge()
```

##### `resetAllowMergeCommit` <a name="resetAllowMergeCommit" id="@cdktf/provider-github.repository.Repository.resetAllowMergeCommit"></a>

```java
public void resetAllowMergeCommit()
```

##### `resetAllowRebaseMerge` <a name="resetAllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge"></a>

```java
public void resetAllowRebaseMerge()
```

##### `resetAllowSquashMerge` <a name="resetAllowSquashMerge" id="@cdktf/provider-github.repository.Repository.resetAllowSquashMerge"></a>

```java
public void resetAllowSquashMerge()
```

##### `resetAllowUpdateBranch` <a name="resetAllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch"></a>

```java
public void resetAllowUpdateBranch()
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-github.repository.Repository.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetArchiveOnDestroy` <a name="resetArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy"></a>

```java
public void resetArchiveOnDestroy()
```

##### `resetAutoInit` <a name="resetAutoInit" id="@cdktf/provider-github.repository.Repository.resetAutoInit"></a>

```java
public void resetAutoInit()
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-github.repository.Repository.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetDeleteBranchOnMerge` <a name="resetDeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge"></a>

```java
public void resetDeleteBranchOnMerge()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.repository.Repository.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGitignoreTemplate` <a name="resetGitignoreTemplate" id="@cdktf/provider-github.repository.Repository.resetGitignoreTemplate"></a>

```java
public void resetGitignoreTemplate()
```

##### `resetHasDiscussions` <a name="resetHasDiscussions" id="@cdktf/provider-github.repository.Repository.resetHasDiscussions"></a>

```java
public void resetHasDiscussions()
```

##### `resetHasDownloads` <a name="resetHasDownloads" id="@cdktf/provider-github.repository.Repository.resetHasDownloads"></a>

```java
public void resetHasDownloads()
```

##### `resetHasIssues` <a name="resetHasIssues" id="@cdktf/provider-github.repository.Repository.resetHasIssues"></a>

```java
public void resetHasIssues()
```

##### `resetHasProjects` <a name="resetHasProjects" id="@cdktf/provider-github.repository.Repository.resetHasProjects"></a>

```java
public void resetHasProjects()
```

##### `resetHasWiki` <a name="resetHasWiki" id="@cdktf/provider-github.repository.Repository.resetHasWiki"></a>

```java
public void resetHasWiki()
```

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktf/provider-github.repository.Repository.resetHomepageUrl"></a>

```java
public void resetHomepageUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repository.Repository.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreVulnerabilityAlertsDuringRead` <a name="resetIgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead"></a>

```java
public void resetIgnoreVulnerabilityAlertsDuringRead()
```

##### `resetIsTemplate` <a name="resetIsTemplate" id="@cdktf/provider-github.repository.Repository.resetIsTemplate"></a>

```java
public void resetIsTemplate()
```

##### `resetLicenseTemplate` <a name="resetLicenseTemplate" id="@cdktf/provider-github.repository.Repository.resetLicenseTemplate"></a>

```java
public void resetLicenseTemplate()
```

##### `resetMergeCommitMessage` <a name="resetMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetMergeCommitMessage"></a>

```java
public void resetMergeCommitMessage()
```

##### `resetMergeCommitTitle` <a name="resetMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetMergeCommitTitle"></a>

```java
public void resetMergeCommitTitle()
```

##### `resetPages` <a name="resetPages" id="@cdktf/provider-github.repository.Repository.resetPages"></a>

```java
public void resetPages()
```

##### `resetPrivate` <a name="resetPrivate" id="@cdktf/provider-github.repository.Repository.resetPrivate"></a>

```java
public void resetPrivate()
```

##### `resetSecurityAndAnalysis` <a name="resetSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis"></a>

```java
public void resetSecurityAndAnalysis()
```

##### `resetSquashMergeCommitMessage` <a name="resetSquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage"></a>

```java
public void resetSquashMergeCommitMessage()
```

##### `resetSquashMergeCommitTitle` <a name="resetSquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle"></a>

```java
public void resetSquashMergeCommitTitle()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-github.repository.Repository.resetTemplate"></a>

```java
public void resetTemplate()
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-github.repository.Repository.resetTopics"></a>

```java
public void resetTopics()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-github.repository.Repository.resetVisibility"></a>

```java
public void resetVisibility()
```

##### `resetVulnerabilityAlerts` <a name="resetVulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts"></a>

```java
public void resetVulnerabilityAlerts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repository.Repository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.Repository;

Repository.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repository.Repository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.Repository;

Repository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repository.Repository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.Repository;

Repository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitCloneUrl">gitCloneUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.httpCloneUrl">httpCloneUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.repoId">repoId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysis">securityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.sshCloneUrl">sshCloneUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.svnUrl">svnUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput">allowAutoMergeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput">allowMergeCommitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput">allowRebaseMergeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput">allowSquashMergeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput">allowUpdateBranchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput">archiveOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInitInput">autoInitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput">deleteBranchOnMergeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput">gitignoreTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput">hasDiscussionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloadsInput">hasDownloadsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssuesInput">hasIssuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjectsInput">hasProjectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWikiInput">hasWikiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrlInput">homepageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput">ignoreVulnerabilityAlertsDuringReadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplateInput">isTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplateInput">licenseTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput">mergeCommitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput">mergeCommitTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pagesInput">pagesInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.privateInput">privateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput">securityAndAnalysisInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput">squashMergeCommitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput">squashMergeCommitTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topicsInput">topicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput">vulnerabilityAlertsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMerge">allowAutoMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommit">allowMergeCommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMerge">allowRebaseMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMerge">allowSquashMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranch">allowUpdateBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInit">autoInit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge">deleteBranchOnMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplate">gitignoreTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussions">hasDiscussions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloads">hasDownloads</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssues">hasIssues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjects">hasProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWiki">hasWiki</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead">ignoreVulnerabilityAlertsDuringRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplate">licenseTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessage">mergeCommitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitle">mergeCommitTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.private">private</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage">squashMergeCommitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle">squashMergeCommitTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repository.Repository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repository.Repository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.Repository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repository.Repository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repository.Repository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repository.Repository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.Repository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.Repository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repository.Repository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repository.Repository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.Repository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.Repository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.Repository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repository.Repository.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-github.repository.Repository.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `gitCloneUrl`<sup>Required</sup> <a name="gitCloneUrl" id="@cdktf/provider-github.repository.Repository.property.gitCloneUrl"></a>

```java
public java.lang.String getGitCloneUrl();
```

- *Type:* java.lang.String

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-github.repository.Repository.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `httpCloneUrl`<sup>Required</sup> <a name="httpCloneUrl" id="@cdktf/provider-github.repository.Repository.property.httpCloneUrl"></a>

```java
public java.lang.String getHttpCloneUrl();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.repository.Repository.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktf/provider-github.repository.Repository.property.pages"></a>

```java
public RepositoryPagesOutputReference getPages();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a>

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktf/provider-github.repository.Repository.property.repoId"></a>

```java
public java.lang.Number getRepoId();
```

- *Type:* java.lang.Number

---

##### `securityAndAnalysis`<sup>Required</sup> <a name="securityAndAnalysis" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysis"></a>

```java
public RepositorySecurityAndAnalysisOutputReference getSecurityAndAnalysis();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a>

---

##### `sshCloneUrl`<sup>Required</sup> <a name="sshCloneUrl" id="@cdktf/provider-github.repository.Repository.property.sshCloneUrl"></a>

```java
public java.lang.String getSshCloneUrl();
```

- *Type:* java.lang.String

---

##### `svnUrl`<sup>Required</sup> <a name="svnUrl" id="@cdktf/provider-github.repository.Repository.property.svnUrl"></a>

```java
public java.lang.String getSvnUrl();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-github.repository.Repository.property.template"></a>

```java
public RepositoryTemplateOutputReference getTemplate();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a>

---

##### `allowAutoMergeInput`<sup>Optional</sup> <a name="allowAutoMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput"></a>

```java
public java.lang.Object getAllowAutoMergeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMergeCommitInput`<sup>Optional</sup> <a name="allowMergeCommitInput" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput"></a>

```java
public java.lang.Object getAllowMergeCommitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowRebaseMergeInput`<sup>Optional</sup> <a name="allowRebaseMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput"></a>

```java
public java.lang.Object getAllowRebaseMergeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSquashMergeInput`<sup>Optional</sup> <a name="allowSquashMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput"></a>

```java
public java.lang.Object getAllowSquashMergeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdateBranchInput`<sup>Optional</sup> <a name="allowUpdateBranchInput" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput"></a>

```java
public java.lang.Object getAllowUpdateBranchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-github.repository.Repository.property.archivedInput"></a>

```java
public java.lang.Object getArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archiveOnDestroyInput`<sup>Optional</sup> <a name="archiveOnDestroyInput" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput"></a>

```java
public java.lang.Object getArchiveOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoInitInput`<sup>Optional</sup> <a name="autoInitInput" id="@cdktf/provider-github.repository.Repository.property.autoInitInput"></a>

```java
public java.lang.Object getAutoInitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-github.repository.Repository.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `deleteBranchOnMergeInput`<sup>Optional</sup> <a name="deleteBranchOnMergeInput" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput"></a>

```java
public java.lang.Object getDeleteBranchOnMergeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.repository.Repository.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gitignoreTemplateInput`<sup>Optional</sup> <a name="gitignoreTemplateInput" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput"></a>

```java
public java.lang.String getGitignoreTemplateInput();
```

- *Type:* java.lang.String

---

##### `hasDiscussionsInput`<sup>Optional</sup> <a name="hasDiscussionsInput" id="@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput"></a>

```java
public java.lang.Object getHasDiscussionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasDownloadsInput`<sup>Optional</sup> <a name="hasDownloadsInput" id="@cdktf/provider-github.repository.Repository.property.hasDownloadsInput"></a>

```java
public java.lang.Object getHasDownloadsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasIssuesInput`<sup>Optional</sup> <a name="hasIssuesInput" id="@cdktf/provider-github.repository.Repository.property.hasIssuesInput"></a>

```java
public java.lang.Object getHasIssuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasProjectsInput`<sup>Optional</sup> <a name="hasProjectsInput" id="@cdktf/provider-github.repository.Repository.property.hasProjectsInput"></a>

```java
public java.lang.Object getHasProjectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasWikiInput`<sup>Optional</sup> <a name="hasWikiInput" id="@cdktf/provider-github.repository.Repository.property.hasWikiInput"></a>

```java
public java.lang.Object getHasWikiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktf/provider-github.repository.Repository.property.homepageUrlInput"></a>

```java
public java.lang.String getHomepageUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repository.Repository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreVulnerabilityAlertsDuringReadInput`<sup>Optional</sup> <a name="ignoreVulnerabilityAlertsDuringReadInput" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput"></a>

```java
public java.lang.Object getIgnoreVulnerabilityAlertsDuringReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTemplateInput`<sup>Optional</sup> <a name="isTemplateInput" id="@cdktf/provider-github.repository.Repository.property.isTemplateInput"></a>

```java
public java.lang.Object getIsTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseTemplateInput`<sup>Optional</sup> <a name="licenseTemplateInput" id="@cdktf/provider-github.repository.Repository.property.licenseTemplateInput"></a>

```java
public java.lang.String getLicenseTemplateInput();
```

- *Type:* java.lang.String

---

##### `mergeCommitMessageInput`<sup>Optional</sup> <a name="mergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput"></a>

```java
public java.lang.String getMergeCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `mergeCommitTitleInput`<sup>Optional</sup> <a name="mergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput"></a>

```java
public java.lang.String getMergeCommitTitleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repository.Repository.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pagesInput`<sup>Optional</sup> <a name="pagesInput" id="@cdktf/provider-github.repository.Repository.property.pagesInput"></a>

```java
public RepositoryPages getPagesInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `privateInput`<sup>Optional</sup> <a name="privateInput" id="@cdktf/provider-github.repository.Repository.property.privateInput"></a>

```java
public java.lang.Object getPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityAndAnalysisInput`<sup>Optional</sup> <a name="securityAndAnalysisInput" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput"></a>

```java
public RepositorySecurityAndAnalysis getSecurityAndAnalysisInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `squashMergeCommitMessageInput`<sup>Optional</sup> <a name="squashMergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput"></a>

```java
public java.lang.String getSquashMergeCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `squashMergeCommitTitleInput`<sup>Optional</sup> <a name="squashMergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput"></a>

```java
public java.lang.String getSquashMergeCommitTitleInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-github.repository.Repository.property.templateInput"></a>

```java
public RepositoryTemplate getTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-github.repository.Repository.property.topicsInput"></a>

```java
public java.util.List<java.lang.String> getTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.repository.Repository.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `vulnerabilityAlertsInput`<sup>Optional</sup> <a name="vulnerabilityAlertsInput" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput"></a>

```java
public java.lang.Object getVulnerabilityAlertsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAutoMerge`<sup>Required</sup> <a name="allowAutoMerge" id="@cdktf/provider-github.repository.Repository.property.allowAutoMerge"></a>

```java
public java.lang.Object getAllowAutoMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMergeCommit`<sup>Required</sup> <a name="allowMergeCommit" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommit"></a>

```java
public java.lang.Object getAllowMergeCommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowRebaseMerge`<sup>Required</sup> <a name="allowRebaseMerge" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMerge"></a>

```java
public java.lang.Object getAllowRebaseMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSquashMerge`<sup>Required</sup> <a name="allowSquashMerge" id="@cdktf/provider-github.repository.Repository.property.allowSquashMerge"></a>

```java
public java.lang.Object getAllowSquashMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUpdateBranch`<sup>Required</sup> <a name="allowUpdateBranch" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranch"></a>

```java
public java.lang.Object getAllowUpdateBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-github.repository.Repository.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archiveOnDestroy`<sup>Required</sup> <a name="archiveOnDestroy" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroy"></a>

```java
public java.lang.Object getArchiveOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoInit`<sup>Required</sup> <a name="autoInit" id="@cdktf/provider-github.repository.Repository.property.autoInit"></a>

```java
public java.lang.Object getAutoInit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-github.repository.Repository.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `deleteBranchOnMerge`<sup>Required</sup> <a name="deleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge"></a>

```java
public java.lang.Object getDeleteBranchOnMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.repository.Repository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gitignoreTemplate`<sup>Required</sup> <a name="gitignoreTemplate" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplate"></a>

```java
public java.lang.String getGitignoreTemplate();
```

- *Type:* java.lang.String

---

##### `hasDiscussions`<sup>Required</sup> <a name="hasDiscussions" id="@cdktf/provider-github.repository.Repository.property.hasDiscussions"></a>

```java
public java.lang.Object getHasDiscussions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasDownloads`<sup>Required</sup> <a name="hasDownloads" id="@cdktf/provider-github.repository.Repository.property.hasDownloads"></a>

```java
public java.lang.Object getHasDownloads();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasIssues`<sup>Required</sup> <a name="hasIssues" id="@cdktf/provider-github.repository.Repository.property.hasIssues"></a>

```java
public java.lang.Object getHasIssues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasProjects`<sup>Required</sup> <a name="hasProjects" id="@cdktf/provider-github.repository.Repository.property.hasProjects"></a>

```java
public java.lang.Object getHasProjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasWiki`<sup>Required</sup> <a name="hasWiki" id="@cdktf/provider-github.repository.Repository.property.hasWiki"></a>

```java
public java.lang.Object getHasWiki();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-github.repository.Repository.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreVulnerabilityAlertsDuringRead`<sup>Required</sup> <a name="ignoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead"></a>

```java
public java.lang.Object getIgnoreVulnerabilityAlertsDuringRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTemplate`<sup>Required</sup> <a name="isTemplate" id="@cdktf/provider-github.repository.Repository.property.isTemplate"></a>

```java
public java.lang.Object getIsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseTemplate`<sup>Required</sup> <a name="licenseTemplate" id="@cdktf/provider-github.repository.Repository.property.licenseTemplate"></a>

```java
public java.lang.String getLicenseTemplate();
```

- *Type:* java.lang.String

---

##### `mergeCommitMessage`<sup>Required</sup> <a name="mergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessage"></a>

```java
public java.lang.String getMergeCommitMessage();
```

- *Type:* java.lang.String

---

##### `mergeCommitTitle`<sup>Required</sup> <a name="mergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitle"></a>

```java
public java.lang.String getMergeCommitTitle();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.Repository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-github.repository.Repository.property.private"></a>

```java
public java.lang.Object getPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `squashMergeCommitMessage`<sup>Required</sup> <a name="squashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage"></a>

```java
public java.lang.String getSquashMergeCommitMessage();
```

- *Type:* java.lang.String

---

##### `squashMergeCommitTitle`<sup>Required</sup> <a name="squashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle"></a>

```java
public java.lang.String getSquashMergeCommitTitle();
```

- *Type:* java.lang.String

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-github.repository.Repository.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.repository.Repository.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `vulnerabilityAlerts`<sup>Required</sup> <a name="vulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts"></a>

```java
public java.lang.Object getVulnerabilityAlerts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repository.Repository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryConfig <a name="RepositoryConfig" id="@cdktf/provider-github.repository.RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryConfig;

RepositoryConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowAutoMerge(java.lang.Boolean)
//  .allowAutoMerge(IResolvable)
//  .allowMergeCommit(java.lang.Boolean)
//  .allowMergeCommit(IResolvable)
//  .allowRebaseMerge(java.lang.Boolean)
//  .allowRebaseMerge(IResolvable)
//  .allowSquashMerge(java.lang.Boolean)
//  .allowSquashMerge(IResolvable)
//  .allowUpdateBranch(java.lang.Boolean)
//  .allowUpdateBranch(IResolvable)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .archiveOnDestroy(java.lang.Boolean)
//  .archiveOnDestroy(IResolvable)
//  .autoInit(java.lang.Boolean)
//  .autoInit(IResolvable)
//  .defaultBranch(java.lang.String)
//  .deleteBranchOnMerge(java.lang.Boolean)
//  .deleteBranchOnMerge(IResolvable)
//  .description(java.lang.String)
//  .gitignoreTemplate(java.lang.String)
//  .hasDiscussions(java.lang.Boolean)
//  .hasDiscussions(IResolvable)
//  .hasDownloads(java.lang.Boolean)
//  .hasDownloads(IResolvable)
//  .hasIssues(java.lang.Boolean)
//  .hasIssues(IResolvable)
//  .hasProjects(java.lang.Boolean)
//  .hasProjects(IResolvable)
//  .hasWiki(java.lang.Boolean)
//  .hasWiki(IResolvable)
//  .homepageUrl(java.lang.String)
//  .id(java.lang.String)
//  .ignoreVulnerabilityAlertsDuringRead(java.lang.Boolean)
//  .ignoreVulnerabilityAlertsDuringRead(IResolvable)
//  .isTemplate(java.lang.Boolean)
//  .isTemplate(IResolvable)
//  .licenseTemplate(java.lang.String)
//  .mergeCommitMessage(java.lang.String)
//  .mergeCommitTitle(java.lang.String)
//  .pages(RepositoryPages)
//  .private(java.lang.Boolean)
//  .private(IResolvable)
//  .securityAndAnalysis(RepositorySecurityAndAnalysis)
//  .squashMergeCommitMessage(java.lang.String)
//  .squashMergeCommitTitle(java.lang.String)
//  .template(RepositoryTemplate)
//  .topics(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
//  .vulnerabilityAlerts(java.lang.Boolean)
//  .vulnerabilityAlerts(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge">allowAutoMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit">allowMergeCommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge">allowRebaseMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge">allowSquashMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch">allowUpdateBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.autoInit">autoInit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge">deleteBranchOnMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate">gitignoreTemplate</a></code> | <code>java.lang.String</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions">hasDiscussions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads">hasDownloads</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues">hasIssues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects">hasProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki">hasWiki</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead">ignoreVulnerabilityAlertsDuringRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate">licenseTemplate</a></code> | <code>java.lang.String</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage">mergeCommitMessage</a></code> | <code>java.lang.String</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle">mergeCommitTitle</a></code> | <code>java.lang.String</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.private">private</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis">securityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage">squashMergeCommitMessage</a></code> | <code>java.lang.String</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle">squashMergeCommitTitle</a></code> | <code>java.lang.String</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.RepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.RepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repository.RepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.RepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.RepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.RepositoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#name Repository#name}

---

##### `allowAutoMerge`<sup>Optional</sup> <a name="allowAutoMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge"></a>

```java
public java.lang.Object getAllowAutoMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `allowMergeCommit`<sup>Optional</sup> <a name="allowMergeCommit" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit"></a>

```java
public java.lang.Object getAllowMergeCommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `allowRebaseMerge`<sup>Optional</sup> <a name="allowRebaseMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge"></a>

```java
public java.lang.Object getAllowRebaseMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `allowSquashMerge`<sup>Optional</sup> <a name="allowSquashMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge"></a>

```java
public java.lang.Object getAllowSquashMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `allowUpdateBranch`<sup>Optional</sup> <a name="allowUpdateBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch"></a>

```java
public java.lang.Object getAllowUpdateBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-github.repository.RepositoryConfig.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#archived Repository#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy"></a>

```java
public java.lang.Object getArchiveOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `autoInit`<sup>Optional</sup> <a name="autoInit" id="@cdktf/provider-github.repository.RepositoryConfig.property.autoInit"></a>

```java
public java.lang.Object getAutoInit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `deleteBranchOnMerge`<sup>Optional</sup> <a name="deleteBranchOnMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge"></a>

```java
public java.lang.Object getDeleteBranchOnMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repository.RepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#description Repository#description}

---

##### `gitignoreTemplate`<sup>Optional</sup> <a name="gitignoreTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate"></a>

```java
public java.lang.String getGitignoreTemplate();
```

- *Type:* java.lang.String

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `hasDiscussions`<sup>Optional</sup> <a name="hasDiscussions" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions"></a>

```java
public java.lang.Object getHasDiscussions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `hasDownloads`<sup>Optional</sup> <a name="hasDownloads" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads"></a>

```java
public java.lang.Object getHasDownloads();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `hasIssues`<sup>Optional</sup> <a name="hasIssues" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues"></a>

```java
public java.lang.Object getHasIssues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `hasProjects`<sup>Optional</sup> <a name="hasProjects" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects"></a>

```java
public java.lang.Object getHasProjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `hasWiki`<sup>Optional</sup> <a name="hasWiki" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki"></a>

```java
public java.lang.Object getHasWiki();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repository.RepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreVulnerabilityAlertsDuringRead`<sup>Optional</sup> <a name="ignoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead"></a>

```java
public java.lang.Object getIgnoreVulnerabilityAlertsDuringRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate"></a>

```java
public java.lang.Object getIsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#is_template Repository#is_template}

---

##### `licenseTemplate`<sup>Optional</sup> <a name="licenseTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate"></a>

```java
public java.lang.String getLicenseTemplate();
```

- *Type:* java.lang.String

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#license_template Repository#license_template}

---

##### `mergeCommitMessage`<sup>Optional</sup> <a name="mergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage"></a>

```java
public java.lang.String getMergeCommitMessage();
```

- *Type:* java.lang.String

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `mergeCommitTitle`<sup>Optional</sup> <a name="mergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle"></a>

```java
public java.lang.String getMergeCommitTitle();
```

- *Type:* java.lang.String

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktf/provider-github.repository.RepositoryConfig.property.pages"></a>

```java
public RepositoryPages getPages();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#pages Repository#pages}

---

##### `private`<sup>Optional</sup> <a name="private" id="@cdktf/provider-github.repository.RepositoryConfig.property.private"></a>

```java
public java.lang.Object getPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#private Repository#private}.

---

##### `securityAndAnalysis`<sup>Optional</sup> <a name="securityAndAnalysis" id="@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis"></a>

```java
public RepositorySecurityAndAnalysis getSecurityAndAnalysis();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `squashMergeCommitMessage`<sup>Optional</sup> <a name="squashMergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage"></a>

```java
public java.lang.String getSquashMergeCommitMessage();
```

- *Type:* java.lang.String

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `squashMergeCommitTitle`<sup>Optional</sup> <a name="squashMergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle"></a>

```java
public java.lang.String getSquashMergeCommitTitle();
```

- *Type:* java.lang.String

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-github.repository.RepositoryConfig.property.template"></a>

```java
public RepositoryTemplate getTemplate();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#template Repository#template}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-github.repository.RepositoryConfig.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#topics Repository#topics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-github.repository.RepositoryConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#visibility Repository#visibility}

---

##### `vulnerabilityAlerts`<sup>Optional</sup> <a name="vulnerabilityAlerts" id="@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts"></a>

```java
public java.lang.Object getVulnerabilityAlerts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

### RepositoryPages <a name="RepositoryPages" id="@cdktf/provider-github.repository.RepositoryPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryPages;

RepositoryPages.builder()
//  .buildType(java.lang.String)
//  .cname(java.lang.String)
//  .source(RepositoryPagesSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.buildType">buildType</a></code> | <code>java.lang.String</code> | The type the page should be sourced. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.cname">cname</a></code> | <code>java.lang.String</code> | The custom domain for the repository. This can only be set after the repository has been created. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | source block. |

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/provider-github.repository.RepositoryPages.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

The type the page should be sourced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#build_type Repository#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPages.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#cname Repository#cname}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPages.property.source"></a>

```java
public RepositoryPagesSource getSource();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#source Repository#source}

---

### RepositoryPagesSource <a name="RepositoryPagesSource" id="@cdktf/provider-github.repository.RepositoryPagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPagesSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryPagesSource;

RepositoryPagesSource.builder()
    .branch(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.branch">branch</a></code> | <code>java.lang.String</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.path">path</a></code> | <code>java.lang.String</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#branch Repository#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#path Repository#path}

---

### RepositorySecurityAndAnalysis <a name="RepositorySecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysis;

RepositorySecurityAndAnalysis.builder()
//  .advancedSecurity(RepositorySecurityAndAnalysisAdvancedSecurity)
//  .secretScanning(RepositorySecurityAndAnalysisSecretScanning)
//  .secretScanningPushProtection(RepositorySecurityAndAnalysisSecretScanningPushProtection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity">advancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | advanced_security block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning">secretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | secret_scanning block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection">secretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | secret_scanning_push_protection block. |

---

##### `advancedSecurity`<sup>Optional</sup> <a name="advancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity"></a>

```java
public RepositorySecurityAndAnalysisAdvancedSecurity getAdvancedSecurity();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#advanced_security Repository#advanced_security}

---

##### `secretScanning`<sup>Optional</sup> <a name="secretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning"></a>

```java
public RepositorySecurityAndAnalysisSecretScanning getSecretScanning();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#secret_scanning Repository#secret_scanning}

---

##### `secretScanningPushProtection`<sup>Optional</sup> <a name="secretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection"></a>

```java
public RepositorySecurityAndAnalysisSecretScanningPushProtection getSecretScanningPushProtection();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

### RepositorySecurityAndAnalysisAdvancedSecurity <a name="RepositorySecurityAndAnalysisAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisAdvancedSecurity;

RepositorySecurityAndAnalysisAdvancedSecurity.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status">status</a></code> | <code>java.lang.String</code> | Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanning <a name="RepositorySecurityAndAnalysisSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisSecretScanning;

RepositorySecurityAndAnalysisSecretScanning.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status">status</a></code> | <code>java.lang.String</code> | Set to 'enabled' to enable secret scanning on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanningPushProtection <a name="RepositorySecurityAndAnalysisSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection;

RepositorySecurityAndAnalysisSecretScanningPushProtection.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status">status</a></code> | <code>java.lang.String</code> | Set to 'enabled' to enable secret scanning push protection on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#status Repository#status}

---

### RepositoryTemplate <a name="RepositoryTemplate" id="@cdktf/provider-github.repository.RepositoryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryTemplate;

RepositoryTemplate.builder()
    .owner(java.lang.String)
    .repository(java.lang.String)
//  .includeAllBranches(java.lang.Boolean)
//  .includeAllBranches(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.owner">owner</a></code> | <code>java.lang.String</code> | The GitHub organization or user the template repository is owned by. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.repository">repository</a></code> | <code>java.lang.String</code> | The name of the template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches">includeAllBranches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template). |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplate.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#owner Repository#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplate.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The name of the template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#repository Repository#repository}

---

##### `includeAllBranches`<sup>Optional</sup> <a name="includeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches"></a>

```java
public java.lang.Object getIncludeAllBranches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/repository#include_all_branches Repository#include_all_branches}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesOutputReference <a name="RepositoryPagesOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryPagesOutputReference;

new RepositoryPagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname">resetCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource"></a>

```java
public void putSource(RepositoryPagesSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `resetBuildType` <a name="resetBuildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType"></a>

```java
public void resetBuildType()
```

##### `resetCname` <a name="resetCname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname"></a>

```java
public void resetCname()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404">custom404</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput">buildTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput">cnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType">buildType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404"></a>

```java
public IResolvable getCustom404();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source"></a>

```java
public RepositoryPagesSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput"></a>

```java
public java.lang.String getBuildTypeInput();
```

- *Type:* java.lang.String

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput"></a>

```java
public java.lang.String getCnameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput"></a>

```java
public RepositoryPagesSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue"></a>

```java
public RepositoryPages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---


### RepositoryPagesSourceOutputReference <a name="RepositoryPagesSourceOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryPagesSourceOutputReference;

new RepositoryPagesSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue"></a>

```java
public RepositoryPagesSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---


### RepositorySecurityAndAnalysisAdvancedSecurityOutputReference <a name="RepositorySecurityAndAnalysisAdvancedSecurityOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference;

new RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue"></a>

```java
public RepositorySecurityAndAnalysisAdvancedSecurity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---


### RepositorySecurityAndAnalysisOutputReference <a name="RepositorySecurityAndAnalysisOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisOutputReference;

new RepositorySecurityAndAnalysisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity">putAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning">putSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection">putSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity">resetAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning">resetSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection">resetSecretScanningPushProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedSecurity` <a name="putAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity"></a>

```java
public void putAdvancedSecurity(RepositorySecurityAndAnalysisAdvancedSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `putSecretScanning` <a name="putSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning"></a>

```java
public void putSecretScanning(RepositorySecurityAndAnalysisSecretScanning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `putSecretScanningPushProtection` <a name="putSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection"></a>

```java
public void putSecretScanningPushProtection(RepositorySecurityAndAnalysisSecretScanningPushProtection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `resetAdvancedSecurity` <a name="resetAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity"></a>

```java
public void resetAdvancedSecurity()
```

##### `resetSecretScanning` <a name="resetSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning"></a>

```java
public void resetSecretScanning()
```

##### `resetSecretScanningPushProtection` <a name="resetSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection"></a>

```java
public void resetSecretScanningPushProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity">advancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning">secretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection">secretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput">advancedSecurityInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput">secretScanningInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput">secretScanningPushProtectionInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedSecurity`<sup>Required</sup> <a name="advancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity"></a>

```java
public RepositorySecurityAndAnalysisAdvancedSecurityOutputReference getAdvancedSecurity();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a>

---

##### `secretScanning`<sup>Required</sup> <a name="secretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning"></a>

```java
public RepositorySecurityAndAnalysisSecretScanningOutputReference getSecretScanning();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a>

---

##### `secretScanningPushProtection`<sup>Required</sup> <a name="secretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection"></a>

```java
public RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference getSecretScanningPushProtection();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a>

---

##### `advancedSecurityInput`<sup>Optional</sup> <a name="advancedSecurityInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput"></a>

```java
public RepositorySecurityAndAnalysisAdvancedSecurity getAdvancedSecurityInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `secretScanningInput`<sup>Optional</sup> <a name="secretScanningInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput"></a>

```java
public RepositorySecurityAndAnalysisSecretScanning getSecretScanningInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `secretScanningPushProtectionInput`<sup>Optional</sup> <a name="secretScanningPushProtectionInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput"></a>

```java
public RepositorySecurityAndAnalysisSecretScanningPushProtection getSecretScanningPushProtectionInput();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue"></a>

```java
public RepositorySecurityAndAnalysis getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---


### RepositorySecurityAndAnalysisSecretScanningOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference;

new RepositorySecurityAndAnalysisSecretScanningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue"></a>

```java
public RepositorySecurityAndAnalysisSecretScanning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---


### RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference;

new RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue"></a>

```java
public RepositorySecurityAndAnalysisSecretScanningPushProtection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---


### RepositoryTemplateOutputReference <a name="RepositoryTemplateOutputReference" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository.RepositoryTemplateOutputReference;

new RepositoryTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches">resetIncludeAllBranches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAllBranches` <a name="resetIncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches"></a>

```java
public void resetIncludeAllBranches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput">includeAllBranchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches">includeAllBranches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeAllBranchesInput`<sup>Optional</sup> <a name="includeAllBranchesInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput"></a>

```java
public java.lang.Object getIncludeAllBranchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `includeAllBranches`<sup>Required</sup> <a name="includeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches"></a>

```java
public java.lang.Object getIncludeAllBranches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue"></a>

```java
public RepositoryTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---



