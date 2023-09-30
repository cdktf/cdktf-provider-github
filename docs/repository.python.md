# `github_repository`

Refer to the Terraform Registory for docs: [`github_repository`](https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository).

# `repository` Submodule <a name="`repository` Submodule" id="@cdktf/provider-github.repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Repository <a name="Repository" id="@cdktf/provider-github.repository.Repository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository github_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.Repository.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.Repository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_auto_merge: typing.Union[bool, IResolvable] = None,
  allow_merge_commit: typing.Union[bool, IResolvable] = None,
  allow_rebase_merge: typing.Union[bool, IResolvable] = None,
  allow_squash_merge: typing.Union[bool, IResolvable] = None,
  allow_update_branch: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  archive_on_destroy: typing.Union[bool, IResolvable] = None,
  auto_init: typing.Union[bool, IResolvable] = None,
  default_branch: str = None,
  delete_branch_on_merge: typing.Union[bool, IResolvable] = None,
  description: str = None,
  gitignore_template: str = None,
  has_discussions: typing.Union[bool, IResolvable] = None,
  has_downloads: typing.Union[bool, IResolvable] = None,
  has_issues: typing.Union[bool, IResolvable] = None,
  has_projects: typing.Union[bool, IResolvable] = None,
  has_wiki: typing.Union[bool, IResolvable] = None,
  homepage_url: str = None,
  id: str = None,
  ignore_vulnerability_alerts_during_read: typing.Union[bool, IResolvable] = None,
  is_template: typing.Union[bool, IResolvable] = None,
  license_template: str = None,
  merge_commit_message: str = None,
  merge_commit_title: str = None,
  pages: RepositoryPages = None,
  private: typing.Union[bool, IResolvable] = None,
  security_and_analysis: RepositorySecurityAndAnalysis = None,
  squash_merge_commit_message: str = None,
  squash_merge_commit_title: str = None,
  template: RepositoryTemplate = None,
  topics: typing.List[str] = None,
  visibility: str = None,
  vulnerability_alerts: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowAutoMerge">allow_auto_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowMergeCommit">allow_merge_commit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowRebaseMerge">allow_rebase_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowSquashMerge">allow_squash_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.allowUpdateBranch">allow_update_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.autoInit">auto_init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.defaultBranch">default_branch</a></code> | <code>str</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.deleteBranchOnMerge">delete_branch_on_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.gitignoreTemplate">gitignore_template</a></code> | <code>str</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDiscussions">has_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDownloads">has_downloads</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasIssues">has_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasProjects">has_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.hasWiki">has_wiki</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.homepageUrl">homepage_url</a></code> | <code>str</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.ignoreVulnerabilityAlertsDuringRead">ignore_vulnerability_alerts_during_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.licenseTemplate">license_template</a></code> | <code>str</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitMessage">merge_commit_message</a></code> | <code>str</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitTitle">merge_commit_title</a></code> | <code>str</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.private">private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.securityAndAnalysis">security_and_analysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitMessage">squash_merge_commit_message</a></code> | <code>str</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitTitle">squash_merge_commit_title</a></code> | <code>str</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.topics">topics</a></code> | <code>typing.List[str]</code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.vulnerabilityAlerts">vulnerability_alerts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.name"></a>

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#name Repository#name}

---

##### `allow_auto_merge`<sup>Optional</sup> <a name="allow_auto_merge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowAutoMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `allow_merge_commit`<sup>Optional</sup> <a name="allow_merge_commit" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowMergeCommit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `allow_rebase_merge`<sup>Optional</sup> <a name="allow_rebase_merge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowRebaseMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `allow_squash_merge`<sup>Optional</sup> <a name="allow_squash_merge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowSquashMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `allow_update_branch`<sup>Optional</sup> <a name="allow_update_branch" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.allowUpdateBranch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#archived Repository#archived}

---

##### `archive_on_destroy`<sup>Optional</sup> <a name="archive_on_destroy" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.archiveOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `auto_init`<sup>Optional</sup> <a name="auto_init" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.autoInit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.defaultBranch"></a>

- *Type:* str

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `delete_branch_on_merge`<sup>Optional</sup> <a name="delete_branch_on_merge" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.deleteBranchOnMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.description"></a>

- *Type:* str

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#description Repository#description}

---

##### `gitignore_template`<sup>Optional</sup> <a name="gitignore_template" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.gitignoreTemplate"></a>

- *Type:* str

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `has_discussions`<sup>Optional</sup> <a name="has_discussions" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDiscussions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `has_downloads`<sup>Optional</sup> <a name="has_downloads" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasDownloads"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `has_issues`<sup>Optional</sup> <a name="has_issues" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasIssues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `has_projects`<sup>Optional</sup> <a name="has_projects" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `has_wiki`<sup>Optional</sup> <a name="has_wiki" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.hasWiki"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.homepageUrl"></a>

- *Type:* str

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_vulnerability_alerts_during_read`<sup>Optional</sup> <a name="ignore_vulnerability_alerts_during_read" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.ignoreVulnerabilityAlertsDuringRead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `is_template`<sup>Optional</sup> <a name="is_template" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.isTemplate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#is_template Repository#is_template}

---

##### `license_template`<sup>Optional</sup> <a name="license_template" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.licenseTemplate"></a>

- *Type:* str

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#license_template Repository#license_template}

---

##### `merge_commit_message`<sup>Optional</sup> <a name="merge_commit_message" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitMessage"></a>

- *Type:* str

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `merge_commit_title`<sup>Optional</sup> <a name="merge_commit_title" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.mergeCommitTitle"></a>

- *Type:* str

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.pages"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#pages Repository#pages}

---

##### `private`<sup>Optional</sup> <a name="private" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.private"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#private Repository#private}.

---

##### `security_and_analysis`<sup>Optional</sup> <a name="security_and_analysis" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.securityAndAnalysis"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `squash_merge_commit_message`<sup>Optional</sup> <a name="squash_merge_commit_message" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitMessage"></a>

- *Type:* str

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `squash_merge_commit_title`<sup>Optional</sup> <a name="squash_merge_commit_title" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.squashMergeCommitTitle"></a>

- *Type:* str

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#template Repository#template}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.topics"></a>

- *Type:* typing.List[str]

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#topics Repository#topics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.visibility"></a>

- *Type:* str

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#visibility Repository#visibility}

---

##### `vulnerability_alerts`<sup>Optional</sup> <a name="vulnerability_alerts" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.vulnerabilityAlerts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repository.Repository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repository.Repository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putPages">put_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis">put_security_and_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowAutoMerge">reset_allow_auto_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowMergeCommit">reset_allow_merge_commit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge">reset_allow_rebase_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowSquashMerge">reset_allow_squash_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch">reset_allow_update_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy">reset_archive_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAutoInit">reset_auto_init</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDefaultBranch">reset_default_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge">reset_delete_branch_on_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetGitignoreTemplate">reset_gitignore_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDiscussions">reset_has_discussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDownloads">reset_has_downloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasIssues">reset_has_issues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasProjects">reset_has_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasWiki">reset_has_wiki</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHomepageUrl">reset_homepage_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead">reset_ignore_vulnerability_alerts_during_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIsTemplate">reset_is_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetLicenseTemplate">reset_license_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitMessage">reset_merge_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitTitle">reset_merge_commit_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPages">reset_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPrivate">reset_private</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis">reset_security_and_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage">reset_squash_merge_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle">reset_squash_merge_commit_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts">reset_vulnerability_alerts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.Repository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repository.Repository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repository.Repository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repository.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repository.Repository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repository.Repository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repository.Repository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.Repository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_pages` <a name="put_pages" id="@cdktf/provider-github.repository.Repository.putPages"></a>

```python
def put_pages(
  build_type: str = None,
  cname: str = None,
  source: RepositoryPagesSource = None
) -> None
```

###### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktf/provider-github.repository.Repository.putPages.parameter.buildType"></a>

- *Type:* str

The type the page should be sourced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#build_type Repository#build_type}

---

###### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-github.repository.Repository.putPages.parameter.cname"></a>

- *Type:* str

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#cname Repository#cname}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.repository.Repository.putPages.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#source Repository#source}

---

##### `put_security_and_analysis` <a name="put_security_and_analysis" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis"></a>

```python
def put_security_and_analysis(
  advanced_security: RepositorySecurityAndAnalysisAdvancedSecurity = None,
  secret_scanning: RepositorySecurityAndAnalysisSecretScanning = None,
  secret_scanning_push_protection: RepositorySecurityAndAnalysisSecretScanningPushProtection = None
) -> None
```

###### `advanced_security`<sup>Optional</sup> <a name="advanced_security" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.advancedSecurity"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#advanced_security Repository#advanced_security}

---

###### `secret_scanning`<sup>Optional</sup> <a name="secret_scanning" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.secretScanning"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#secret_scanning Repository#secret_scanning}

---

###### `secret_scanning_push_protection`<sup>Optional</sup> <a name="secret_scanning_push_protection" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.secretScanningPushProtection"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

##### `put_template` <a name="put_template" id="@cdktf/provider-github.repository.Repository.putTemplate"></a>

```python
def put_template(
  owner: str,
  repository: str,
  include_all_branches: typing.Union[bool, IResolvable] = None
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.owner"></a>

- *Type:* str

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#owner Repository#owner}

---

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.repository"></a>

- *Type:* str

The name of the template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#repository Repository#repository}

---

###### `include_all_branches`<sup>Optional</sup> <a name="include_all_branches" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.includeAllBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#include_all_branches Repository#include_all_branches}

---

##### `reset_allow_auto_merge` <a name="reset_allow_auto_merge" id="@cdktf/provider-github.repository.Repository.resetAllowAutoMerge"></a>

```python
def reset_allow_auto_merge() -> None
```

##### `reset_allow_merge_commit` <a name="reset_allow_merge_commit" id="@cdktf/provider-github.repository.Repository.resetAllowMergeCommit"></a>

```python
def reset_allow_merge_commit() -> None
```

##### `reset_allow_rebase_merge` <a name="reset_allow_rebase_merge" id="@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge"></a>

```python
def reset_allow_rebase_merge() -> None
```

##### `reset_allow_squash_merge` <a name="reset_allow_squash_merge" id="@cdktf/provider-github.repository.Repository.resetAllowSquashMerge"></a>

```python
def reset_allow_squash_merge() -> None
```

##### `reset_allow_update_branch` <a name="reset_allow_update_branch" id="@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch"></a>

```python
def reset_allow_update_branch() -> None
```

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-github.repository.Repository.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_archive_on_destroy` <a name="reset_archive_on_destroy" id="@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy"></a>

```python
def reset_archive_on_destroy() -> None
```

##### `reset_auto_init` <a name="reset_auto_init" id="@cdktf/provider-github.repository.Repository.resetAutoInit"></a>

```python
def reset_auto_init() -> None
```

##### `reset_default_branch` <a name="reset_default_branch" id="@cdktf/provider-github.repository.Repository.resetDefaultBranch"></a>

```python
def reset_default_branch() -> None
```

##### `reset_delete_branch_on_merge` <a name="reset_delete_branch_on_merge" id="@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge"></a>

```python
def reset_delete_branch_on_merge() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.repository.Repository.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gitignore_template` <a name="reset_gitignore_template" id="@cdktf/provider-github.repository.Repository.resetGitignoreTemplate"></a>

```python
def reset_gitignore_template() -> None
```

##### `reset_has_discussions` <a name="reset_has_discussions" id="@cdktf/provider-github.repository.Repository.resetHasDiscussions"></a>

```python
def reset_has_discussions() -> None
```

##### `reset_has_downloads` <a name="reset_has_downloads" id="@cdktf/provider-github.repository.Repository.resetHasDownloads"></a>

```python
def reset_has_downloads() -> None
```

##### `reset_has_issues` <a name="reset_has_issues" id="@cdktf/provider-github.repository.Repository.resetHasIssues"></a>

```python
def reset_has_issues() -> None
```

##### `reset_has_projects` <a name="reset_has_projects" id="@cdktf/provider-github.repository.Repository.resetHasProjects"></a>

```python
def reset_has_projects() -> None
```

##### `reset_has_wiki` <a name="reset_has_wiki" id="@cdktf/provider-github.repository.Repository.resetHasWiki"></a>

```python
def reset_has_wiki() -> None
```

##### `reset_homepage_url` <a name="reset_homepage_url" id="@cdktf/provider-github.repository.Repository.resetHomepageUrl"></a>

```python
def reset_homepage_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repository.Repository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_vulnerability_alerts_during_read` <a name="reset_ignore_vulnerability_alerts_during_read" id="@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead"></a>

```python
def reset_ignore_vulnerability_alerts_during_read() -> None
```

##### `reset_is_template` <a name="reset_is_template" id="@cdktf/provider-github.repository.Repository.resetIsTemplate"></a>

```python
def reset_is_template() -> None
```

##### `reset_license_template` <a name="reset_license_template" id="@cdktf/provider-github.repository.Repository.resetLicenseTemplate"></a>

```python
def reset_license_template() -> None
```

##### `reset_merge_commit_message` <a name="reset_merge_commit_message" id="@cdktf/provider-github.repository.Repository.resetMergeCommitMessage"></a>

```python
def reset_merge_commit_message() -> None
```

##### `reset_merge_commit_title` <a name="reset_merge_commit_title" id="@cdktf/provider-github.repository.Repository.resetMergeCommitTitle"></a>

```python
def reset_merge_commit_title() -> None
```

##### `reset_pages` <a name="reset_pages" id="@cdktf/provider-github.repository.Repository.resetPages"></a>

```python
def reset_pages() -> None
```

##### `reset_private` <a name="reset_private" id="@cdktf/provider-github.repository.Repository.resetPrivate"></a>

```python
def reset_private() -> None
```

##### `reset_security_and_analysis` <a name="reset_security_and_analysis" id="@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis"></a>

```python
def reset_security_and_analysis() -> None
```

##### `reset_squash_merge_commit_message` <a name="reset_squash_merge_commit_message" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage"></a>

```python
def reset_squash_merge_commit_message() -> None
```

##### `reset_squash_merge_commit_title` <a name="reset_squash_merge_commit_title" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle"></a>

```python
def reset_squash_merge_commit_title() -> None
```

##### `reset_template` <a name="reset_template" id="@cdktf/provider-github.repository.Repository.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-github.repository.Repository.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-github.repository.Repository.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_vulnerability_alerts` <a name="reset_vulnerability_alerts" id="@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts"></a>

```python
def reset_vulnerability_alerts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repository.Repository.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.Repository.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repository.Repository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.Repository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repository.Repository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.Repository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitCloneUrl">git_clone_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.httpCloneUrl">http_clone_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.primaryLanguage">primary_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.repoId">repo_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysis">security_and_analysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.sshCloneUrl">ssh_clone_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.svnUrl">svn_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput">allow_auto_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput">allow_merge_commit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput">allow_rebase_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput">allow_squash_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput">allow_update_branch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput">archive_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInitInput">auto_init_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranchInput">default_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput">delete_branch_on_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput">gitignore_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput">has_discussions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloadsInput">has_downloads_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssuesInput">has_issues_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjectsInput">has_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWikiInput">has_wiki_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrlInput">homepage_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput">ignore_vulnerability_alerts_during_read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplateInput">is_template_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplateInput">license_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput">merge_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput">merge_commit_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pagesInput">pages_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.privateInput">private_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput">security_and_analysis_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput">squash_merge_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput">squash_merge_commit_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topicsInput">topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput">vulnerability_alerts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMerge">allow_auto_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommit">allow_merge_commit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMerge">allow_rebase_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMerge">allow_squash_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranch">allow_update_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInit">auto_init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge">delete_branch_on_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplate">gitignore_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussions">has_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloads">has_downloads</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssues">has_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjects">has_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWiki">has_wiki</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrl">homepage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead">ignore_vulnerability_alerts_during_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplate">license_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessage">merge_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitle">merge_commit_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.private">private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage">squash_merge_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle">squash_merge_commit_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topics">topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts">vulnerability_alerts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repository.Repository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repository.Repository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.Repository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repository.Repository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repository.Repository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repository.Repository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.Repository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.Repository.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repository.Repository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repository.Repository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.Repository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.Repository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.Repository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repository.Repository.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-github.repository.Repository.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `git_clone_url`<sup>Required</sup> <a name="git_clone_url" id="@cdktf/provider-github.repository.Repository.property.gitCloneUrl"></a>

```python
git_clone_url: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-github.repository.Repository.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `http_clone_url`<sup>Required</sup> <a name="http_clone_url" id="@cdktf/provider-github.repository.Repository.property.httpCloneUrl"></a>

```python
http_clone_url: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-github.repository.Repository.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktf/provider-github.repository.Repository.property.pages"></a>

```python
pages: RepositoryPagesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a>

---

##### `primary_language`<sup>Required</sup> <a name="primary_language" id="@cdktf/provider-github.repository.Repository.property.primaryLanguage"></a>

```python
primary_language: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="@cdktf/provider-github.repository.Repository.property.repoId"></a>

```python
repo_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_and_analysis`<sup>Required</sup> <a name="security_and_analysis" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysis"></a>

```python
security_and_analysis: RepositorySecurityAndAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a>

---

##### `ssh_clone_url`<sup>Required</sup> <a name="ssh_clone_url" id="@cdktf/provider-github.repository.Repository.property.sshCloneUrl"></a>

```python
ssh_clone_url: str
```

- *Type:* str

---

##### `svn_url`<sup>Required</sup> <a name="svn_url" id="@cdktf/provider-github.repository.Repository.property.svnUrl"></a>

```python
svn_url: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-github.repository.Repository.property.template"></a>

```python
template: RepositoryTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a>

---

##### `allow_auto_merge_input`<sup>Optional</sup> <a name="allow_auto_merge_input" id="@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput"></a>

```python
allow_auto_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_merge_commit_input`<sup>Optional</sup> <a name="allow_merge_commit_input" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput"></a>

```python
allow_merge_commit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_rebase_merge_input`<sup>Optional</sup> <a name="allow_rebase_merge_input" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput"></a>

```python
allow_rebase_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_squash_merge_input`<sup>Optional</sup> <a name="allow_squash_merge_input" id="@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput"></a>

```python
allow_squash_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_update_branch_input`<sup>Optional</sup> <a name="allow_update_branch_input" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput"></a>

```python
allow_update_branch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-github.repository.Repository.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_on_destroy_input`<sup>Optional</sup> <a name="archive_on_destroy_input" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput"></a>

```python
archive_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_init_input`<sup>Optional</sup> <a name="auto_init_input" id="@cdktf/provider-github.repository.Repository.property.autoInitInput"></a>

```python
auto_init_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_branch_input`<sup>Optional</sup> <a name="default_branch_input" id="@cdktf/provider-github.repository.Repository.property.defaultBranchInput"></a>

```python
default_branch_input: str
```

- *Type:* str

---

##### `delete_branch_on_merge_input`<sup>Optional</sup> <a name="delete_branch_on_merge_input" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput"></a>

```python
delete_branch_on_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.repository.Repository.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gitignore_template_input`<sup>Optional</sup> <a name="gitignore_template_input" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput"></a>

```python
gitignore_template_input: str
```

- *Type:* str

---

##### `has_discussions_input`<sup>Optional</sup> <a name="has_discussions_input" id="@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput"></a>

```python
has_discussions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_downloads_input`<sup>Optional</sup> <a name="has_downloads_input" id="@cdktf/provider-github.repository.Repository.property.hasDownloadsInput"></a>

```python
has_downloads_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_issues_input`<sup>Optional</sup> <a name="has_issues_input" id="@cdktf/provider-github.repository.Repository.property.hasIssuesInput"></a>

```python
has_issues_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_projects_input`<sup>Optional</sup> <a name="has_projects_input" id="@cdktf/provider-github.repository.Repository.property.hasProjectsInput"></a>

```python
has_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_wiki_input`<sup>Optional</sup> <a name="has_wiki_input" id="@cdktf/provider-github.repository.Repository.property.hasWikiInput"></a>

```python
has_wiki_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `homepage_url_input`<sup>Optional</sup> <a name="homepage_url_input" id="@cdktf/provider-github.repository.Repository.property.homepageUrlInput"></a>

```python
homepage_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repository.Repository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_vulnerability_alerts_during_read_input`<sup>Optional</sup> <a name="ignore_vulnerability_alerts_during_read_input" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput"></a>

```python
ignore_vulnerability_alerts_during_read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_template_input`<sup>Optional</sup> <a name="is_template_input" id="@cdktf/provider-github.repository.Repository.property.isTemplateInput"></a>

```python
is_template_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_template_input`<sup>Optional</sup> <a name="license_template_input" id="@cdktf/provider-github.repository.Repository.property.licenseTemplateInput"></a>

```python
license_template_input: str
```

- *Type:* str

---

##### `merge_commit_message_input`<sup>Optional</sup> <a name="merge_commit_message_input" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput"></a>

```python
merge_commit_message_input: str
```

- *Type:* str

---

##### `merge_commit_title_input`<sup>Optional</sup> <a name="merge_commit_title_input" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput"></a>

```python
merge_commit_title_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.repository.Repository.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pages_input`<sup>Optional</sup> <a name="pages_input" id="@cdktf/provider-github.repository.Repository.property.pagesInput"></a>

```python
pages_input: RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `private_input`<sup>Optional</sup> <a name="private_input" id="@cdktf/provider-github.repository.Repository.property.privateInput"></a>

```python
private_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_and_analysis_input`<sup>Optional</sup> <a name="security_and_analysis_input" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput"></a>

```python
security_and_analysis_input: RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `squash_merge_commit_message_input`<sup>Optional</sup> <a name="squash_merge_commit_message_input" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput"></a>

```python
squash_merge_commit_message_input: str
```

- *Type:* str

---

##### `squash_merge_commit_title_input`<sup>Optional</sup> <a name="squash_merge_commit_title_input" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput"></a>

```python
squash_merge_commit_title_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-github.repository.Repository.property.templateInput"></a>

```python
template_input: RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-github.repository.Repository.property.topicsInput"></a>

```python
topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-github.repository.Repository.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `vulnerability_alerts_input`<sup>Optional</sup> <a name="vulnerability_alerts_input" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput"></a>

```python
vulnerability_alerts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_auto_merge`<sup>Required</sup> <a name="allow_auto_merge" id="@cdktf/provider-github.repository.Repository.property.allowAutoMerge"></a>

```python
allow_auto_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_merge_commit`<sup>Required</sup> <a name="allow_merge_commit" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommit"></a>

```python
allow_merge_commit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_rebase_merge`<sup>Required</sup> <a name="allow_rebase_merge" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMerge"></a>

```python
allow_rebase_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_squash_merge`<sup>Required</sup> <a name="allow_squash_merge" id="@cdktf/provider-github.repository.Repository.property.allowSquashMerge"></a>

```python
allow_squash_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_update_branch`<sup>Required</sup> <a name="allow_update_branch" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranch"></a>

```python
allow_update_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-github.repository.Repository.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_on_destroy`<sup>Required</sup> <a name="archive_on_destroy" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroy"></a>

```python
archive_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_init`<sup>Required</sup> <a name="auto_init" id="@cdktf/provider-github.repository.Repository.property.autoInit"></a>

```python
auto_init: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktf/provider-github.repository.Repository.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `delete_branch_on_merge`<sup>Required</sup> <a name="delete_branch_on_merge" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge"></a>

```python
delete_branch_on_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.repository.Repository.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gitignore_template`<sup>Required</sup> <a name="gitignore_template" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplate"></a>

```python
gitignore_template: str
```

- *Type:* str

---

##### `has_discussions`<sup>Required</sup> <a name="has_discussions" id="@cdktf/provider-github.repository.Repository.property.hasDiscussions"></a>

```python
has_discussions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_downloads`<sup>Required</sup> <a name="has_downloads" id="@cdktf/provider-github.repository.Repository.property.hasDownloads"></a>

```python
has_downloads: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_issues`<sup>Required</sup> <a name="has_issues" id="@cdktf/provider-github.repository.Repository.property.hasIssues"></a>

```python
has_issues: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_projects`<sup>Required</sup> <a name="has_projects" id="@cdktf/provider-github.repository.Repository.property.hasProjects"></a>

```python
has_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_wiki`<sup>Required</sup> <a name="has_wiki" id="@cdktf/provider-github.repository.Repository.property.hasWiki"></a>

```python
has_wiki: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `homepage_url`<sup>Required</sup> <a name="homepage_url" id="@cdktf/provider-github.repository.Repository.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_vulnerability_alerts_during_read`<sup>Required</sup> <a name="ignore_vulnerability_alerts_during_read" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead"></a>

```python
ignore_vulnerability_alerts_during_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_template`<sup>Required</sup> <a name="is_template" id="@cdktf/provider-github.repository.Repository.property.isTemplate"></a>

```python
is_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_template`<sup>Required</sup> <a name="license_template" id="@cdktf/provider-github.repository.Repository.property.licenseTemplate"></a>

```python
license_template: str
```

- *Type:* str

---

##### `merge_commit_message`<sup>Required</sup> <a name="merge_commit_message" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessage"></a>

```python
merge_commit_message: str
```

- *Type:* str

---

##### `merge_commit_title`<sup>Required</sup> <a name="merge_commit_title" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitle"></a>

```python
merge_commit_title: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.Repository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-github.repository.Repository.property.private"></a>

```python
private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `squash_merge_commit_message`<sup>Required</sup> <a name="squash_merge_commit_message" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage"></a>

```python
squash_merge_commit_message: str
```

- *Type:* str

---

##### `squash_merge_commit_title`<sup>Required</sup> <a name="squash_merge_commit_title" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle"></a>

```python
squash_merge_commit_title: str
```

- *Type:* str

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-github.repository.Repository.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.repository.Repository.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `vulnerability_alerts`<sup>Required</sup> <a name="vulnerability_alerts" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts"></a>

```python
vulnerability_alerts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repository.Repository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryConfig <a name="RepositoryConfig" id="@cdktf/provider-github.repository.RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_auto_merge: typing.Union[bool, IResolvable] = None,
  allow_merge_commit: typing.Union[bool, IResolvable] = None,
  allow_rebase_merge: typing.Union[bool, IResolvable] = None,
  allow_squash_merge: typing.Union[bool, IResolvable] = None,
  allow_update_branch: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  archive_on_destroy: typing.Union[bool, IResolvable] = None,
  auto_init: typing.Union[bool, IResolvable] = None,
  default_branch: str = None,
  delete_branch_on_merge: typing.Union[bool, IResolvable] = None,
  description: str = None,
  gitignore_template: str = None,
  has_discussions: typing.Union[bool, IResolvable] = None,
  has_downloads: typing.Union[bool, IResolvable] = None,
  has_issues: typing.Union[bool, IResolvable] = None,
  has_projects: typing.Union[bool, IResolvable] = None,
  has_wiki: typing.Union[bool, IResolvable] = None,
  homepage_url: str = None,
  id: str = None,
  ignore_vulnerability_alerts_during_read: typing.Union[bool, IResolvable] = None,
  is_template: typing.Union[bool, IResolvable] = None,
  license_template: str = None,
  merge_commit_message: str = None,
  merge_commit_title: str = None,
  pages: RepositoryPages = None,
  private: typing.Union[bool, IResolvable] = None,
  security_and_analysis: RepositorySecurityAndAnalysis = None,
  squash_merge_commit_message: str = None,
  squash_merge_commit_title: str = None,
  template: RepositoryTemplate = None,
  topics: typing.List[str] = None,
  visibility: str = None,
  vulnerability_alerts: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.name">name</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge">allow_auto_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit">allow_merge_commit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge">allow_rebase_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge">allow_squash_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch">allow_update_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.autoInit">auto_init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch">default_branch</a></code> | <code>str</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge">delete_branch_on_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.description">description</a></code> | <code>str</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate">gitignore_template</a></code> | <code>str</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions">has_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads">has_downloads</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues">has_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects">has_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki">has_wiki</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl">homepage_url</a></code> | <code>str</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead">ignore_vulnerability_alerts_during_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate">is_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate">license_template</a></code> | <code>str</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage">merge_commit_message</a></code> | <code>str</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle">merge_commit_title</a></code> | <code>str</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.private">private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis">security_and_analysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage">squash_merge_commit_message</a></code> | <code>str</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle">squash_merge_commit_title</a></code> | <code>str</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.topics">topics</a></code> | <code>typing.List[str]</code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.visibility">visibility</a></code> | <code>str</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts">vulnerability_alerts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.RepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.RepositoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repository.RepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.RepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.RepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.RepositoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#name Repository#name}

---

##### `allow_auto_merge`<sup>Optional</sup> <a name="allow_auto_merge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge"></a>

```python
allow_auto_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `allow_merge_commit`<sup>Optional</sup> <a name="allow_merge_commit" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit"></a>

```python
allow_merge_commit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `allow_rebase_merge`<sup>Optional</sup> <a name="allow_rebase_merge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge"></a>

```python
allow_rebase_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `allow_squash_merge`<sup>Optional</sup> <a name="allow_squash_merge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge"></a>

```python
allow_squash_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `allow_update_branch`<sup>Optional</sup> <a name="allow_update_branch" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch"></a>

```python
allow_update_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-github.repository.RepositoryConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#archived Repository#archived}

---

##### `archive_on_destroy`<sup>Optional</sup> <a name="archive_on_destroy" id="@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy"></a>

```python
archive_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `auto_init`<sup>Optional</sup> <a name="auto_init" id="@cdktf/provider-github.repository.RepositoryConfig.property.autoInit"></a>

```python
auto_init: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `delete_branch_on_merge`<sup>Optional</sup> <a name="delete_branch_on_merge" id="@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge"></a>

```python
delete_branch_on_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repository.RepositoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#description Repository#description}

---

##### `gitignore_template`<sup>Optional</sup> <a name="gitignore_template" id="@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate"></a>

```python
gitignore_template: str
```

- *Type:* str

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `has_discussions`<sup>Optional</sup> <a name="has_discussions" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions"></a>

```python
has_discussions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `has_downloads`<sup>Optional</sup> <a name="has_downloads" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads"></a>

```python
has_downloads: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `has_issues`<sup>Optional</sup> <a name="has_issues" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues"></a>

```python
has_issues: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `has_projects`<sup>Optional</sup> <a name="has_projects" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects"></a>

```python
has_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `has_wiki`<sup>Optional</sup> <a name="has_wiki" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki"></a>

```python
has_wiki: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repository.RepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_vulnerability_alerts_during_read`<sup>Optional</sup> <a name="ignore_vulnerability_alerts_during_read" id="@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead"></a>

```python
ignore_vulnerability_alerts_during_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `is_template`<sup>Optional</sup> <a name="is_template" id="@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate"></a>

```python
is_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#is_template Repository#is_template}

---

##### `license_template`<sup>Optional</sup> <a name="license_template" id="@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate"></a>

```python
license_template: str
```

- *Type:* str

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#license_template Repository#license_template}

---

##### `merge_commit_message`<sup>Optional</sup> <a name="merge_commit_message" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage"></a>

```python
merge_commit_message: str
```

- *Type:* str

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `merge_commit_title`<sup>Optional</sup> <a name="merge_commit_title" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle"></a>

```python
merge_commit_title: str
```

- *Type:* str

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktf/provider-github.repository.RepositoryConfig.property.pages"></a>

```python
pages: RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#pages Repository#pages}

---

##### `private`<sup>Optional</sup> <a name="private" id="@cdktf/provider-github.repository.RepositoryConfig.property.private"></a>

```python
private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#private Repository#private}.

---

##### `security_and_analysis`<sup>Optional</sup> <a name="security_and_analysis" id="@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis"></a>

```python
security_and_analysis: RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `squash_merge_commit_message`<sup>Optional</sup> <a name="squash_merge_commit_message" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage"></a>

```python
squash_merge_commit_message: str
```

- *Type:* str

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `squash_merge_commit_title`<sup>Optional</sup> <a name="squash_merge_commit_title" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle"></a>

```python
squash_merge_commit_title: str
```

- *Type:* str

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-github.repository.RepositoryConfig.property.template"></a>

```python
template: RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#template Repository#template}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-github.repository.RepositoryConfig.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#topics Repository#topics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-github.repository.RepositoryConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#visibility Repository#visibility}

---

##### `vulnerability_alerts`<sup>Optional</sup> <a name="vulnerability_alerts" id="@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts"></a>

```python
vulnerability_alerts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

### RepositoryPages <a name="RepositoryPages" id="@cdktf/provider-github.repository.RepositoryPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPages.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryPages(
  build_type: str = None,
  cname: str = None,
  source: RepositoryPagesSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.buildType">build_type</a></code> | <code>str</code> | The type the page should be sourced. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.cname">cname</a></code> | <code>str</code> | The custom domain for the repository. This can only be set after the repository has been created. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | source block. |

---

##### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktf/provider-github.repository.RepositoryPages.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

The type the page should be sourced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#build_type Repository#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPages.property.cname"></a>

```python
cname: str
```

- *Type:* str

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#cname Repository#cname}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPages.property.source"></a>

```python
source: RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#source Repository#source}

---

### RepositoryPagesSource <a name="RepositoryPagesSource" id="@cdktf/provider-github.repository.RepositoryPagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPagesSource.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryPagesSource(
  branch: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.branch">branch</a></code> | <code>str</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.path">path</a></code> | <code>str</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.branch"></a>

```python
branch: str
```

- *Type:* str

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#branch Repository#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.path"></a>

```python
path: str
```

- *Type:* str

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#path Repository#path}

---

### RepositorySecurityAndAnalysis <a name="RepositorySecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysis(
  advanced_security: RepositorySecurityAndAnalysisAdvancedSecurity = None,
  secret_scanning: RepositorySecurityAndAnalysisSecretScanning = None,
  secret_scanning_push_protection: RepositorySecurityAndAnalysisSecretScanningPushProtection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity">advanced_security</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | advanced_security block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning">secret_scanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | secret_scanning block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection">secret_scanning_push_protection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | secret_scanning_push_protection block. |

---

##### `advanced_security`<sup>Optional</sup> <a name="advanced_security" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity"></a>

```python
advanced_security: RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#advanced_security Repository#advanced_security}

---

##### `secret_scanning`<sup>Optional</sup> <a name="secret_scanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning"></a>

```python
secret_scanning: RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#secret_scanning Repository#secret_scanning}

---

##### `secret_scanning_push_protection`<sup>Optional</sup> <a name="secret_scanning_push_protection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection"></a>

```python
secret_scanning_push_protection: RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

### RepositorySecurityAndAnalysisAdvancedSecurity <a name="RepositorySecurityAndAnalysisAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisAdvancedSecurity(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status">status</a></code> | <code>str</code> | Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status"></a>

```python
status: str
```

- *Type:* str

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanning <a name="RepositorySecurityAndAnalysisSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisSecretScanning(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status">status</a></code> | <code>str</code> | Set to 'enabled' to enable secret scanning on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status"></a>

```python
status: str
```

- *Type:* str

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanningPushProtection <a name="RepositorySecurityAndAnalysisSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisSecretScanningPushProtection(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status">status</a></code> | <code>str</code> | Set to 'enabled' to enable secret scanning push protection on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status"></a>

```python
status: str
```

- *Type:* str

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

### RepositoryTemplate <a name="RepositoryTemplate" id="@cdktf/provider-github.repository.RepositoryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryTemplate(
  owner: str,
  repository: str,
  include_all_branches: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.owner">owner</a></code> | <code>str</code> | The GitHub organization or user the template repository is owned by. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.repository">repository</a></code> | <code>str</code> | The name of the template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches">include_all_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template). |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplate.property.owner"></a>

```python
owner: str
```

- *Type:* str

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#owner Repository#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplate.property.repository"></a>

```python
repository: str
```

- *Type:* str

The name of the template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#repository Repository#repository}

---

##### `include_all_branches`<sup>Optional</sup> <a name="include_all_branches" id="@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches"></a>

```python
include_all_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#include_all_branches Repository#include_all_branches}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesOutputReference <a name="RepositoryPagesOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryPagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType">reset_build_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname">reset_cname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source` <a name="put_source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource"></a>

```python
def put_source(
  branch: str,
  path: str = None
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.branch"></a>

- *Type:* str

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#branch Repository#branch}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.path"></a>

- *Type:* str

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#path Repository#path}

---

##### `reset_build_type` <a name="reset_build_type" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType"></a>

```python
def reset_build_type() -> None
```

##### `reset_cname` <a name="reset_cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname"></a>

```python
def reset_cname() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404">custom404</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput">build_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput">cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType">build_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404"></a>

```python
custom404: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source"></a>

```python
source: RepositoryPagesSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `build_type_input`<sup>Optional</sup> <a name="build_type_input" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput"></a>

```python
build_type_input: str
```

- *Type:* str

---

##### `cname_input`<sup>Optional</sup> <a name="cname_input" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput"></a>

```python
cname_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput"></a>

```python
source_input: RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `build_type`<sup>Required</sup> <a name="build_type" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---


### RepositoryPagesSourceOutputReference <a name="RepositoryPagesSourceOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryPagesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---


### RepositorySecurityAndAnalysisAdvancedSecurityOutputReference <a name="RepositorySecurityAndAnalysisAdvancedSecurityOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue"></a>

```python
internal_value: RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---


### RepositorySecurityAndAnalysisOutputReference <a name="RepositorySecurityAndAnalysisOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity">put_advanced_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning">put_secret_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection">put_secret_scanning_push_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity">reset_advanced_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning">reset_secret_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection">reset_secret_scanning_push_protection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_security` <a name="put_advanced_security" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity"></a>

```python
def put_advanced_security(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity.parameter.status"></a>

- *Type:* str

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

##### `put_secret_scanning` <a name="put_secret_scanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning"></a>

```python
def put_secret_scanning(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning.parameter.status"></a>

- *Type:* str

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

##### `put_secret_scanning_push_protection` <a name="put_secret_scanning_push_protection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection"></a>

```python
def put_secret_scanning_push_protection(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection.parameter.status"></a>

- *Type:* str

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository#status Repository#status}

---

##### `reset_advanced_security` <a name="reset_advanced_security" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity"></a>

```python
def reset_advanced_security() -> None
```

##### `reset_secret_scanning` <a name="reset_secret_scanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning"></a>

```python
def reset_secret_scanning() -> None
```

##### `reset_secret_scanning_push_protection` <a name="reset_secret_scanning_push_protection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection"></a>

```python
def reset_secret_scanning_push_protection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity">advanced_security</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning">secret_scanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection">secret_scanning_push_protection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput">advanced_security_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput">secret_scanning_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput">secret_scanning_push_protection_input</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_security`<sup>Required</sup> <a name="advanced_security" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity"></a>

```python
advanced_security: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a>

---

##### `secret_scanning`<sup>Required</sup> <a name="secret_scanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning"></a>

```python
secret_scanning: RepositorySecurityAndAnalysisSecretScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a>

---

##### `secret_scanning_push_protection`<sup>Required</sup> <a name="secret_scanning_push_protection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection"></a>

```python
secret_scanning_push_protection: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a>

---

##### `advanced_security_input`<sup>Optional</sup> <a name="advanced_security_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput"></a>

```python
advanced_security_input: RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `secret_scanning_input`<sup>Optional</sup> <a name="secret_scanning_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput"></a>

```python
secret_scanning_input: RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `secret_scanning_push_protection_input`<sup>Optional</sup> <a name="secret_scanning_push_protection_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput"></a>

```python
secret_scanning_push_protection_input: RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---


### RepositorySecurityAndAnalysisSecretScanningOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisSecretScanningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue"></a>

```python
internal_value: RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---


### RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue"></a>

```python
internal_value: RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---


### RepositoryTemplateOutputReference <a name="RepositoryTemplateOutputReference" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository

repository.RepositoryTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches">reset_include_all_branches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_all_branches` <a name="reset_include_all_branches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches"></a>

```python
def reset_include_all_branches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput">include_all_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches">include_all_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_all_branches_input`<sup>Optional</sup> <a name="include_all_branches_input" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput"></a>

```python
include_all_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `include_all_branches`<sup>Required</sup> <a name="include_all_branches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches"></a>

```python
include_all_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---



