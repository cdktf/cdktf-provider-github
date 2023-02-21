# `repository` Submodule <a name="`repository` Submodule" id="@cdktf/provider-github.repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Repository <a name="Repository" id="@cdktf/provider-github.repository.Repository"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository github_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.Repository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepository(scope Construct, id *string, config RepositoryConfig) Repository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repository.Repository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repository.Repository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putPages">PutPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis">PutSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowAutoMerge">ResetAllowAutoMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowMergeCommit">ResetAllowMergeCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge">ResetAllowRebaseMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowSquashMerge">ResetAllowSquashMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch">ResetAllowUpdateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy">ResetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAutoInit">ResetAutoInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge">ResetDeleteBranchOnMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetGitignoreTemplate">ResetGitignoreTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDiscussions">ResetHasDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDownloads">ResetHasDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasIssues">ResetHasIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasProjects">ResetHasProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasWiki">ResetHasWiki</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead">ResetIgnoreVulnerabilityAlertsDuringRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIsTemplate">ResetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetLicenseTemplate">ResetLicenseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitMessage">ResetMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitTitle">ResetMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPages">ResetPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPrivate">ResetPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis">ResetSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage">ResetSquashMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle">ResetSquashMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts">ResetVulnerabilityAlerts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.Repository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repository.Repository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repository.Repository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repository.Repository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repository.Repository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPages` <a name="PutPages" id="@cdktf/provider-github.repository.Repository.putPages"></a>

```go
func PutPages(value RepositoryPages)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `PutSecurityAndAnalysis` <a name="PutSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis"></a>

```go
func PutSecurityAndAnalysis(value RepositorySecurityAndAnalysis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-github.repository.Repository.putTemplate"></a>

```go
func PutTemplate(value RepositoryTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `ResetAllowAutoMerge` <a name="ResetAllowAutoMerge" id="@cdktf/provider-github.repository.Repository.resetAllowAutoMerge"></a>

```go
func ResetAllowAutoMerge()
```

##### `ResetAllowMergeCommit` <a name="ResetAllowMergeCommit" id="@cdktf/provider-github.repository.Repository.resetAllowMergeCommit"></a>

```go
func ResetAllowMergeCommit()
```

##### `ResetAllowRebaseMerge` <a name="ResetAllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge"></a>

```go
func ResetAllowRebaseMerge()
```

##### `ResetAllowSquashMerge` <a name="ResetAllowSquashMerge" id="@cdktf/provider-github.repository.Repository.resetAllowSquashMerge"></a>

```go
func ResetAllowSquashMerge()
```

##### `ResetAllowUpdateBranch` <a name="ResetAllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch"></a>

```go
func ResetAllowUpdateBranch()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-github.repository.Repository.resetArchived"></a>

```go
func ResetArchived()
```

##### `ResetArchiveOnDestroy` <a name="ResetArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy"></a>

```go
func ResetArchiveOnDestroy()
```

##### `ResetAutoInit` <a name="ResetAutoInit" id="@cdktf/provider-github.repository.Repository.resetAutoInit"></a>

```go
func ResetAutoInit()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-github.repository.Repository.resetDefaultBranch"></a>

```go
func ResetDefaultBranch()
```

##### `ResetDeleteBranchOnMerge` <a name="ResetDeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge"></a>

```go
func ResetDeleteBranchOnMerge()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.repository.Repository.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGitignoreTemplate` <a name="ResetGitignoreTemplate" id="@cdktf/provider-github.repository.Repository.resetGitignoreTemplate"></a>

```go
func ResetGitignoreTemplate()
```

##### `ResetHasDiscussions` <a name="ResetHasDiscussions" id="@cdktf/provider-github.repository.Repository.resetHasDiscussions"></a>

```go
func ResetHasDiscussions()
```

##### `ResetHasDownloads` <a name="ResetHasDownloads" id="@cdktf/provider-github.repository.Repository.resetHasDownloads"></a>

```go
func ResetHasDownloads()
```

##### `ResetHasIssues` <a name="ResetHasIssues" id="@cdktf/provider-github.repository.Repository.resetHasIssues"></a>

```go
func ResetHasIssues()
```

##### `ResetHasProjects` <a name="ResetHasProjects" id="@cdktf/provider-github.repository.Repository.resetHasProjects"></a>

```go
func ResetHasProjects()
```

##### `ResetHasWiki` <a name="ResetHasWiki" id="@cdktf/provider-github.repository.Repository.resetHasWiki"></a>

```go
func ResetHasWiki()
```

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-github.repository.Repository.resetHomepageUrl"></a>

```go
func ResetHomepageUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repository.Repository.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreVulnerabilityAlertsDuringRead` <a name="ResetIgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead"></a>

```go
func ResetIgnoreVulnerabilityAlertsDuringRead()
```

##### `ResetIsTemplate` <a name="ResetIsTemplate" id="@cdktf/provider-github.repository.Repository.resetIsTemplate"></a>

```go
func ResetIsTemplate()
```

##### `ResetLicenseTemplate` <a name="ResetLicenseTemplate" id="@cdktf/provider-github.repository.Repository.resetLicenseTemplate"></a>

```go
func ResetLicenseTemplate()
```

##### `ResetMergeCommitMessage` <a name="ResetMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetMergeCommitMessage"></a>

```go
func ResetMergeCommitMessage()
```

##### `ResetMergeCommitTitle` <a name="ResetMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetMergeCommitTitle"></a>

```go
func ResetMergeCommitTitle()
```

##### `ResetPages` <a name="ResetPages" id="@cdktf/provider-github.repository.Repository.resetPages"></a>

```go
func ResetPages()
```

##### `ResetPrivate` <a name="ResetPrivate" id="@cdktf/provider-github.repository.Repository.resetPrivate"></a>

```go
func ResetPrivate()
```

##### `ResetSecurityAndAnalysis` <a name="ResetSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis"></a>

```go
func ResetSecurityAndAnalysis()
```

##### `ResetSquashMergeCommitMessage` <a name="ResetSquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage"></a>

```go
func ResetSquashMergeCommitMessage()
```

##### `ResetSquashMergeCommitTitle` <a name="ResetSquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle"></a>

```go
func ResetSquashMergeCommitTitle()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-github.repository.Repository.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-github.repository.Repository.resetTopics"></a>

```go
func ResetTopics()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-github.repository.Repository.resetVisibility"></a>

```go
func ResetVisibility()
```

##### `ResetVulnerabilityAlerts` <a name="ResetVulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts"></a>

```go
func ResetVulnerabilityAlerts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repository.Repository.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.Repository_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repository.Repository.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.Repository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repository.Repository.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.Repository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitCloneUrl">GitCloneUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.httpCloneUrl">HttpCloneUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pages">Pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.repoId">RepoId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysis">SecurityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.sshCloneUrl">SshCloneUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.svnUrl">SvnUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.template">Template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput">AllowAutoMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput">AllowMergeCommitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput">AllowRebaseMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput">AllowSquashMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput">AllowUpdateBranchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archivedInput">ArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput">ArchiveOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInitInput">AutoInitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput">DeleteBranchOnMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput">GitignoreTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput">HasDiscussionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloadsInput">HasDownloadsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssuesInput">HasIssuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjectsInput">HasProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWikiInput">HasWikiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput">IgnoreVulnerabilityAlertsDuringReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplateInput">IsTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplateInput">LicenseTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput">MergeCommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput">MergeCommitTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pagesInput">PagesInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.privateInput">PrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput">SecurityAndAnalysisInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput">SquashMergeCommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput">SquashMergeCommitTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topicsInput">TopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput">VulnerabilityAlertsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMerge">AllowAutoMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommit">AllowMergeCommit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMerge">AllowRebaseMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMerge">AllowSquashMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranch">AllowUpdateBranch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archived">Archived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInit">AutoInit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge">DeleteBranchOnMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplate">GitignoreTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussions">HasDiscussions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloads">HasDownloads</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssues">HasIssues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjects">HasProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWiki">HasWiki</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead">IgnoreVulnerabilityAlertsDuringRead</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplate">IsTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplate">LicenseTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessage">MergeCommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitle">MergeCommitTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.private">Private</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage">SquashMergeCommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle">SquashMergeCommitTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts">VulnerabilityAlerts</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repository.Repository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repository.Repository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.Repository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repository.Repository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repository.Repository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repository.Repository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repository.Repository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repository.Repository.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repository.Repository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repository.Repository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repository.Repository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.Repository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repository.Repository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.repository.Repository.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-github.repository.Repository.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `GitCloneUrl`<sup>Required</sup> <a name="GitCloneUrl" id="@cdktf/provider-github.repository.Repository.property.gitCloneUrl"></a>

```go
func GitCloneUrl() *string
```

- *Type:* *string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-github.repository.Repository.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `HttpCloneUrl`<sup>Required</sup> <a name="HttpCloneUrl" id="@cdktf/provider-github.repository.Repository.property.httpCloneUrl"></a>

```go
func HttpCloneUrl() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.repository.Repository.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktf/provider-github.repository.Repository.property.pages"></a>

```go
func Pages() RepositoryPagesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a>

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktf/provider-github.repository.Repository.property.repoId"></a>

```go
func RepoId() *f64
```

- *Type:* *f64

---

##### `SecurityAndAnalysis`<sup>Required</sup> <a name="SecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysis"></a>

```go
func SecurityAndAnalysis() RepositorySecurityAndAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a>

---

##### `SshCloneUrl`<sup>Required</sup> <a name="SshCloneUrl" id="@cdktf/provider-github.repository.Repository.property.sshCloneUrl"></a>

```go
func SshCloneUrl() *string
```

- *Type:* *string

---

##### `SvnUrl`<sup>Required</sup> <a name="SvnUrl" id="@cdktf/provider-github.repository.Repository.property.svnUrl"></a>

```go
func SvnUrl() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-github.repository.Repository.property.template"></a>

```go
func Template() RepositoryTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a>

---

##### `AllowAutoMergeInput`<sup>Optional</sup> <a name="AllowAutoMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput"></a>

```go
func AllowAutoMergeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMergeCommitInput`<sup>Optional</sup> <a name="AllowMergeCommitInput" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput"></a>

```go
func AllowMergeCommitInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRebaseMergeInput`<sup>Optional</sup> <a name="AllowRebaseMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput"></a>

```go
func AllowRebaseMergeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSquashMergeInput`<sup>Optional</sup> <a name="AllowSquashMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput"></a>

```go
func AllowSquashMergeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdateBranchInput`<sup>Optional</sup> <a name="AllowUpdateBranchInput" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput"></a>

```go
func AllowUpdateBranchInput() interface{}
```

- *Type:* interface{}

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-github.repository.Repository.property.archivedInput"></a>

```go
func ArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnDestroyInput`<sup>Optional</sup> <a name="ArchiveOnDestroyInput" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput"></a>

```go
func ArchiveOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoInitInput`<sup>Optional</sup> <a name="AutoInitInput" id="@cdktf/provider-github.repository.Repository.property.autoInitInput"></a>

```go
func AutoInitInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-github.repository.Repository.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `DeleteBranchOnMergeInput`<sup>Optional</sup> <a name="DeleteBranchOnMergeInput" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput"></a>

```go
func DeleteBranchOnMergeInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.repository.Repository.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GitignoreTemplateInput`<sup>Optional</sup> <a name="GitignoreTemplateInput" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput"></a>

```go
func GitignoreTemplateInput() *string
```

- *Type:* *string

---

##### `HasDiscussionsInput`<sup>Optional</sup> <a name="HasDiscussionsInput" id="@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput"></a>

```go
func HasDiscussionsInput() interface{}
```

- *Type:* interface{}

---

##### `HasDownloadsInput`<sup>Optional</sup> <a name="HasDownloadsInput" id="@cdktf/provider-github.repository.Repository.property.hasDownloadsInput"></a>

```go
func HasDownloadsInput() interface{}
```

- *Type:* interface{}

---

##### `HasIssuesInput`<sup>Optional</sup> <a name="HasIssuesInput" id="@cdktf/provider-github.repository.Repository.property.hasIssuesInput"></a>

```go
func HasIssuesInput() interface{}
```

- *Type:* interface{}

---

##### `HasProjectsInput`<sup>Optional</sup> <a name="HasProjectsInput" id="@cdktf/provider-github.repository.Repository.property.hasProjectsInput"></a>

```go
func HasProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `HasWikiInput`<sup>Optional</sup> <a name="HasWikiInput" id="@cdktf/provider-github.repository.Repository.property.hasWikiInput"></a>

```go
func HasWikiInput() interface{}
```

- *Type:* interface{}

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-github.repository.Repository.property.homepageUrlInput"></a>

```go
func HomepageUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repository.Repository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreVulnerabilityAlertsDuringReadInput`<sup>Optional</sup> <a name="IgnoreVulnerabilityAlertsDuringReadInput" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput"></a>

```go
func IgnoreVulnerabilityAlertsDuringReadInput() interface{}
```

- *Type:* interface{}

---

##### `IsTemplateInput`<sup>Optional</sup> <a name="IsTemplateInput" id="@cdktf/provider-github.repository.Repository.property.isTemplateInput"></a>

```go
func IsTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseTemplateInput`<sup>Optional</sup> <a name="LicenseTemplateInput" id="@cdktf/provider-github.repository.Repository.property.licenseTemplateInput"></a>

```go
func LicenseTemplateInput() *string
```

- *Type:* *string

---

##### `MergeCommitMessageInput`<sup>Optional</sup> <a name="MergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput"></a>

```go
func MergeCommitMessageInput() *string
```

- *Type:* *string

---

##### `MergeCommitTitleInput`<sup>Optional</sup> <a name="MergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput"></a>

```go
func MergeCommitTitleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repository.Repository.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PagesInput`<sup>Optional</sup> <a name="PagesInput" id="@cdktf/provider-github.repository.Repository.property.pagesInput"></a>

```go
func PagesInput() RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `PrivateInput`<sup>Optional</sup> <a name="PrivateInput" id="@cdktf/provider-github.repository.Repository.property.privateInput"></a>

```go
func PrivateInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityAndAnalysisInput`<sup>Optional</sup> <a name="SecurityAndAnalysisInput" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput"></a>

```go
func SecurityAndAnalysisInput() RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `SquashMergeCommitMessageInput`<sup>Optional</sup> <a name="SquashMergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput"></a>

```go
func SquashMergeCommitMessageInput() *string
```

- *Type:* *string

---

##### `SquashMergeCommitTitleInput`<sup>Optional</sup> <a name="SquashMergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput"></a>

```go
func SquashMergeCommitTitleInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-github.repository.Repository.property.templateInput"></a>

```go
func TemplateInput() RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-github.repository.Repository.property.topicsInput"></a>

```go
func TopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.repository.Repository.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `VulnerabilityAlertsInput`<sup>Optional</sup> <a name="VulnerabilityAlertsInput" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput"></a>

```go
func VulnerabilityAlertsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAutoMerge`<sup>Required</sup> <a name="AllowAutoMerge" id="@cdktf/provider-github.repository.Repository.property.allowAutoMerge"></a>

```go
func AllowAutoMerge() interface{}
```

- *Type:* interface{}

---

##### `AllowMergeCommit`<sup>Required</sup> <a name="AllowMergeCommit" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommit"></a>

```go
func AllowMergeCommit() interface{}
```

- *Type:* interface{}

---

##### `AllowRebaseMerge`<sup>Required</sup> <a name="AllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMerge"></a>

```go
func AllowRebaseMerge() interface{}
```

- *Type:* interface{}

---

##### `AllowSquashMerge`<sup>Required</sup> <a name="AllowSquashMerge" id="@cdktf/provider-github.repository.Repository.property.allowSquashMerge"></a>

```go
func AllowSquashMerge() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdateBranch`<sup>Required</sup> <a name="AllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranch"></a>

```go
func AllowUpdateBranch() interface{}
```

- *Type:* interface{}

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-github.repository.Repository.property.archived"></a>

```go
func Archived() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnDestroy`<sup>Required</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroy"></a>

```go
func ArchiveOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `AutoInit`<sup>Required</sup> <a name="AutoInit" id="@cdktf/provider-github.repository.Repository.property.autoInit"></a>

```go
func AutoInit() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-github.repository.Repository.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `DeleteBranchOnMerge`<sup>Required</sup> <a name="DeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge"></a>

```go
func DeleteBranchOnMerge() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.repository.Repository.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GitignoreTemplate`<sup>Required</sup> <a name="GitignoreTemplate" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplate"></a>

```go
func GitignoreTemplate() *string
```

- *Type:* *string

---

##### `HasDiscussions`<sup>Required</sup> <a name="HasDiscussions" id="@cdktf/provider-github.repository.Repository.property.hasDiscussions"></a>

```go
func HasDiscussions() interface{}
```

- *Type:* interface{}

---

##### `HasDownloads`<sup>Required</sup> <a name="HasDownloads" id="@cdktf/provider-github.repository.Repository.property.hasDownloads"></a>

```go
func HasDownloads() interface{}
```

- *Type:* interface{}

---

##### `HasIssues`<sup>Required</sup> <a name="HasIssues" id="@cdktf/provider-github.repository.Repository.property.hasIssues"></a>

```go
func HasIssues() interface{}
```

- *Type:* interface{}

---

##### `HasProjects`<sup>Required</sup> <a name="HasProjects" id="@cdktf/provider-github.repository.Repository.property.hasProjects"></a>

```go
func HasProjects() interface{}
```

- *Type:* interface{}

---

##### `HasWiki`<sup>Required</sup> <a name="HasWiki" id="@cdktf/provider-github.repository.Repository.property.hasWiki"></a>

```go
func HasWiki() interface{}
```

- *Type:* interface{}

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-github.repository.Repository.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreVulnerabilityAlertsDuringRead`<sup>Required</sup> <a name="IgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead"></a>

```go
func IgnoreVulnerabilityAlertsDuringRead() interface{}
```

- *Type:* interface{}

---

##### `IsTemplate`<sup>Required</sup> <a name="IsTemplate" id="@cdktf/provider-github.repository.Repository.property.isTemplate"></a>

```go
func IsTemplate() interface{}
```

- *Type:* interface{}

---

##### `LicenseTemplate`<sup>Required</sup> <a name="LicenseTemplate" id="@cdktf/provider-github.repository.Repository.property.licenseTemplate"></a>

```go
func LicenseTemplate() *string
```

- *Type:* *string

---

##### `MergeCommitMessage`<sup>Required</sup> <a name="MergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessage"></a>

```go
func MergeCommitMessage() *string
```

- *Type:* *string

---

##### `MergeCommitTitle`<sup>Required</sup> <a name="MergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitle"></a>

```go
func MergeCommitTitle() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repository.Repository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Private`<sup>Required</sup> <a name="Private" id="@cdktf/provider-github.repository.Repository.property.private"></a>

```go
func Private() interface{}
```

- *Type:* interface{}

---

##### `SquashMergeCommitMessage`<sup>Required</sup> <a name="SquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage"></a>

```go
func SquashMergeCommitMessage() *string
```

- *Type:* *string

---

##### `SquashMergeCommitTitle`<sup>Required</sup> <a name="SquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle"></a>

```go
func SquashMergeCommitTitle() *string
```

- *Type:* *string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-github.repository.Repository.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.repository.Repository.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `VulnerabilityAlerts`<sup>Required</sup> <a name="VulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts"></a>

```go
func VulnerabilityAlerts() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repository.Repository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryConfig <a name="RepositoryConfig" id="@cdktf/provider-github.repository.RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositoryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowAutoMerge: interface{},
	AllowMergeCommit: interface{},
	AllowRebaseMerge: interface{},
	AllowSquashMerge: interface{},
	AllowUpdateBranch: interface{},
	Archived: interface{},
	ArchiveOnDestroy: interface{},
	AutoInit: interface{},
	DefaultBranch: *string,
	DeleteBranchOnMerge: interface{},
	Description: *string,
	GitignoreTemplate: *string,
	HasDiscussions: interface{},
	HasDownloads: interface{},
	HasIssues: interface{},
	HasProjects: interface{},
	HasWiki: interface{},
	HomepageUrl: *string,
	Id: *string,
	IgnoreVulnerabilityAlertsDuringRead: interface{},
	IsTemplate: interface{},
	LicenseTemplate: *string,
	MergeCommitMessage: *string,
	MergeCommitTitle: *string,
	Pages: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositoryPages,
	Private: interface{},
	SecurityAndAnalysis: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositorySecurityAndAnalysis,
	SquashMergeCommitMessage: *string,
	SquashMergeCommitTitle: *string,
	Template: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositoryTemplate,
	Topics: *[]*string,
	Visibility: *string,
	VulnerabilityAlerts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.name">Name</a></code> | <code>*string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge">AllowAutoMerge</a></code> | <code>interface{}</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit">AllowMergeCommit</a></code> | <code>interface{}</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge">AllowRebaseMerge</a></code> | <code>interface{}</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge">AllowSquashMerge</a></code> | <code>interface{}</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch">AllowUpdateBranch</a></code> | <code>interface{}</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archived">Archived</a></code> | <code>interface{}</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>interface{}</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.autoInit">AutoInit</a></code> | <code>interface{}</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge">DeleteBranchOnMerge</a></code> | <code>interface{}</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.description">Description</a></code> | <code>*string</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate">GitignoreTemplate</a></code> | <code>*string</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions">HasDiscussions</a></code> | <code>interface{}</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads">HasDownloads</a></code> | <code>interface{}</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues">HasIssues</a></code> | <code>interface{}</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects">HasProjects</a></code> | <code>interface{}</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki">HasWiki</a></code> | <code>interface{}</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead">IgnoreVulnerabilityAlertsDuringRead</a></code> | <code>interface{}</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate">IsTemplate</a></code> | <code>interface{}</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate">LicenseTemplate</a></code> | <code>*string</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage">MergeCommitMessage</a></code> | <code>*string</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle">MergeCommitTitle</a></code> | <code>*string</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.pages">Pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.private">Private</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis">SecurityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage">SquashMergeCommitMessage</a></code> | <code>*string</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle">SquashMergeCommitTitle</a></code> | <code>*string</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.topics">Topics</a></code> | <code>*[]*string</code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts">VulnerabilityAlerts</a></code> | <code>interface{}</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repository.RepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repository.RepositoryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repository.RepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.RepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repository.RepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repository.RepositoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#name Repository#name}

---

##### `AllowAutoMerge`<sup>Optional</sup> <a name="AllowAutoMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge"></a>

```go
AllowAutoMerge interface{}
```

- *Type:* interface{}

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `AllowMergeCommit`<sup>Optional</sup> <a name="AllowMergeCommit" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit"></a>

```go
AllowMergeCommit interface{}
```

- *Type:* interface{}

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `AllowRebaseMerge`<sup>Optional</sup> <a name="AllowRebaseMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge"></a>

```go
AllowRebaseMerge interface{}
```

- *Type:* interface{}

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `AllowSquashMerge`<sup>Optional</sup> <a name="AllowSquashMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge"></a>

```go
AllowSquashMerge interface{}
```

- *Type:* interface{}

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `AllowUpdateBranch`<sup>Optional</sup> <a name="AllowUpdateBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch"></a>

```go
AllowUpdateBranch interface{}
```

- *Type:* interface{}

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#allow_update_branch Repository#allow_update_branch}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-github.repository.RepositoryConfig.property.archived"></a>

```go
Archived interface{}
```

- *Type:* interface{}

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#archived Repository#archived}

---

##### `ArchiveOnDestroy`<sup>Optional</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy"></a>

```go
ArchiveOnDestroy interface{}
```

- *Type:* interface{}

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `AutoInit`<sup>Optional</sup> <a name="AutoInit" id="@cdktf/provider-github.repository.RepositoryConfig.property.autoInit"></a>

```go
AutoInit interface{}
```

- *Type:* interface{}

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#auto_init Repository#auto_init}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#default_branch Repository#default_branch}

---

##### `DeleteBranchOnMerge`<sup>Optional</sup> <a name="DeleteBranchOnMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge"></a>

```go
DeleteBranchOnMerge interface{}
```

- *Type:* interface{}

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.repository.RepositoryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#description Repository#description}

---

##### `GitignoreTemplate`<sup>Optional</sup> <a name="GitignoreTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate"></a>

```go
GitignoreTemplate *string
```

- *Type:* *string

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#gitignore_template Repository#gitignore_template}

---

##### `HasDiscussions`<sup>Optional</sup> <a name="HasDiscussions" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions"></a>

```go
HasDiscussions interface{}
```

- *Type:* interface{}

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#has_discussions Repository#has_discussions}

---

##### `HasDownloads`<sup>Optional</sup> <a name="HasDownloads" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads"></a>

```go
HasDownloads interface{}
```

- *Type:* interface{}

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#has_downloads Repository#has_downloads}

---

##### `HasIssues`<sup>Optional</sup> <a name="HasIssues" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues"></a>

```go
HasIssues interface{}
```

- *Type:* interface{}

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#has_issues Repository#has_issues}

---

##### `HasProjects`<sup>Optional</sup> <a name="HasProjects" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects"></a>

```go
HasProjects interface{}
```

- *Type:* interface{}

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#has_projects Repository#has_projects}

---

##### `HasWiki`<sup>Optional</sup> <a name="HasWiki" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki"></a>

```go
HasWiki interface{}
```

- *Type:* interface{}

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#has_wiki Repository#has_wiki}

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl"></a>

```go
HomepageUrl *string
```

- *Type:* *string

URL of a page describing the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#homepage_url Repository#homepage_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repository.RepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreVulnerabilityAlertsDuringRead`<sup>Optional</sup> <a name="IgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead"></a>

```go
IgnoreVulnerabilityAlertsDuringRead interface{}
```

- *Type:* interface{}

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `IsTemplate`<sup>Optional</sup> <a name="IsTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate"></a>

```go
IsTemplate interface{}
```

- *Type:* interface{}

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#is_template Repository#is_template}

---

##### `LicenseTemplate`<sup>Optional</sup> <a name="LicenseTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate"></a>

```go
LicenseTemplate *string
```

- *Type:* *string

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#license_template Repository#license_template}

---

##### `MergeCommitMessage`<sup>Optional</sup> <a name="MergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage"></a>

```go
MergeCommitMessage *string
```

- *Type:* *string

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#merge_commit_message Repository#merge_commit_message}

---

##### `MergeCommitTitle`<sup>Optional</sup> <a name="MergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle"></a>

```go
MergeCommitTitle *string
```

- *Type:* *string

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#merge_commit_title Repository#merge_commit_title}

---

##### `Pages`<sup>Optional</sup> <a name="Pages" id="@cdktf/provider-github.repository.RepositoryConfig.property.pages"></a>

```go
Pages RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#pages Repository#pages}

---

##### `Private`<sup>Optional</sup> <a name="Private" id="@cdktf/provider-github.repository.RepositoryConfig.property.private"></a>

```go
Private interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#private Repository#private}.

---

##### `SecurityAndAnalysis`<sup>Optional</sup> <a name="SecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis"></a>

```go
SecurityAndAnalysis RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#security_and_analysis Repository#security_and_analysis}

---

##### `SquashMergeCommitMessage`<sup>Optional</sup> <a name="SquashMergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage"></a>

```go
SquashMergeCommitMessage *string
```

- *Type:* *string

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `SquashMergeCommitTitle`<sup>Optional</sup> <a name="SquashMergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle"></a>

```go
SquashMergeCommitTitle *string
```

- *Type:* *string

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-github.repository.RepositoryConfig.property.template"></a>

```go
Template RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#template Repository#template}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-github.repository.RepositoryConfig.property.topics"></a>

```go
Topics *[]*string
```

- *Type:* *[]*string

The list of topics of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#topics Repository#topics}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-github.repository.RepositoryConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#visibility Repository#visibility}

---

##### `VulnerabilityAlerts`<sup>Optional</sup> <a name="VulnerabilityAlerts" id="@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts"></a>

```go
VulnerabilityAlerts interface{}
```

- *Type:* interface{}

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

### RepositoryPages <a name="RepositoryPages" id="@cdktf/provider-github.repository.RepositoryPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositoryPages {
	Source: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositoryPagesSource,
	Cname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.source">Source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.cname">Cname</a></code> | <code>*string</code> | The custom domain for the repository. This can only be set after the repository has been created. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-github.repository.RepositoryPages.property.source"></a>

```go
Source RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#source Repository#source}

---

##### `Cname`<sup>Optional</sup> <a name="Cname" id="@cdktf/provider-github.repository.RepositoryPages.property.cname"></a>

```go
Cname *string
```

- *Type:* *string

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#cname Repository#cname}

---

### RepositoryPagesSource <a name="RepositoryPagesSource" id="@cdktf/provider-github.repository.RepositoryPagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPagesSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositoryPagesSource {
	Branch: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.branch">Branch</a></code> | <code>*string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.path">Path</a></code> | <code>*string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#branch Repository#branch}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#path Repository#path}

---

### RepositorySecurityAndAnalysis <a name="RepositorySecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositorySecurityAndAnalysis {
	AdvancedSecurity: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositorySecurityAndAnalysisAdvancedSecurity,
	SecretScanning: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositorySecurityAndAnalysisSecretScanning,
	SecretScanningPushProtection: github.com/cdktf/cdktf-provider-github-go/github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity">AdvancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | advanced_security block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning">SecretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | secret_scanning block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection">SecretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | secret_scanning_push_protection block. |

---

##### `AdvancedSecurity`<sup>Optional</sup> <a name="AdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity"></a>

```go
AdvancedSecurity RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#advanced_security Repository#advanced_security}

---

##### `SecretScanning`<sup>Optional</sup> <a name="SecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning"></a>

```go
SecretScanning RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#secret_scanning Repository#secret_scanning}

---

##### `SecretScanningPushProtection`<sup>Optional</sup> <a name="SecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection"></a>

```go
SecretScanningPushProtection RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

### RepositorySecurityAndAnalysisAdvancedSecurity <a name="RepositorySecurityAndAnalysisAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositorySecurityAndAnalysisAdvancedSecurity {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status">Status</a></code> | <code>*string</code> | Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status"></a>

```go
Status *string
```

- *Type:* *string

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanning <a name="RepositorySecurityAndAnalysisSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositorySecurityAndAnalysisSecretScanning {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status">Status</a></code> | <code>*string</code> | Set to 'enabled' to enable secret scanning on the repository. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status"></a>

```go
Status *string
```

- *Type:* *string

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanningPushProtection <a name="RepositorySecurityAndAnalysisSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositorySecurityAndAnalysisSecretScanningPushProtection {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status">Status</a></code> | <code>*string</code> | Set to 'enabled' to enable secret scanning push protection on the repository. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status"></a>

```go
Status *string
```

- *Type:* *string

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#status Repository#status}

---

### RepositoryTemplate <a name="RepositoryTemplate" id="@cdktf/provider-github.repository.RepositoryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

&repository.RepositoryTemplate {
	Owner: *string,
	Repository: *string,
	IncludeAllBranches: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.owner">Owner</a></code> | <code>*string</code> | The GitHub organization or user the template repository is owned by. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.repository">Repository</a></code> | <code>*string</code> | The name of the template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches">IncludeAllBranches</a></code> | <code>interface{}</code> | Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template). |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repository.RepositoryTemplate.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#owner Repository#owner}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repository.RepositoryTemplate.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The name of the template repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#repository Repository#repository}

---

##### `IncludeAllBranches`<sup>Optional</sup> <a name="IncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches"></a>

```go
IncludeAllBranches interface{}
```

- *Type:* interface{}

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository#include_all_branches Repository#include_all_branches}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesOutputReference <a name="RepositoryPagesOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositoryPagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryPagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname">ResetCname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource"></a>

```go
func PutSource(value RepositoryPagesSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `ResetCname` <a name="ResetCname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname"></a>

```go
func ResetCname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404">Custom404</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput">CnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Custom404`<sup>Required</sup> <a name="Custom404" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404"></a>

```go
func Custom404() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source"></a>

```go
func Source() RepositoryPagesSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput"></a>

```go
func CnameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput"></a>

```go
func SourceInput() RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryPages
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---


### RepositoryPagesSourceOutputReference <a name="RepositoryPagesSourceOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositoryPagesSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryPagesSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryPagesSource
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---


### RepositorySecurityAndAnalysisAdvancedSecurityOutputReference <a name="RepositorySecurityAndAnalysisAdvancedSecurityOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositorySecurityAndAnalysisAdvancedSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositorySecurityAndAnalysisAdvancedSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---


### RepositorySecurityAndAnalysisOutputReference <a name="RepositorySecurityAndAnalysisOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositorySecurityAndAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositorySecurityAndAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity">PutAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning">PutSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection">PutSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity">ResetAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning">ResetSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection">ResetSecretScanningPushProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedSecurity` <a name="PutAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity"></a>

```go
func PutAdvancedSecurity(value RepositorySecurityAndAnalysisAdvancedSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `PutSecretScanning` <a name="PutSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning"></a>

```go
func PutSecretScanning(value RepositorySecurityAndAnalysisSecretScanning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `PutSecretScanningPushProtection` <a name="PutSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection"></a>

```go
func PutSecretScanningPushProtection(value RepositorySecurityAndAnalysisSecretScanningPushProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `ResetAdvancedSecurity` <a name="ResetAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity"></a>

```go
func ResetAdvancedSecurity()
```

##### `ResetSecretScanning` <a name="ResetSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning"></a>

```go
func ResetSecretScanning()
```

##### `ResetSecretScanningPushProtection` <a name="ResetSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection"></a>

```go
func ResetSecretScanningPushProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity">AdvancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning">SecretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection">SecretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput">AdvancedSecurityInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput">SecretScanningInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput">SecretScanningPushProtectionInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedSecurity`<sup>Required</sup> <a name="AdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity"></a>

```go
func AdvancedSecurity() RepositorySecurityAndAnalysisAdvancedSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a>

---

##### `SecretScanning`<sup>Required</sup> <a name="SecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning"></a>

```go
func SecretScanning() RepositorySecurityAndAnalysisSecretScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a>

---

##### `SecretScanningPushProtection`<sup>Required</sup> <a name="SecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection"></a>

```go
func SecretScanningPushProtection() RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a>

---

##### `AdvancedSecurityInput`<sup>Optional</sup> <a name="AdvancedSecurityInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput"></a>

```go
func AdvancedSecurityInput() RepositorySecurityAndAnalysisAdvancedSecurity
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `SecretScanningInput`<sup>Optional</sup> <a name="SecretScanningInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput"></a>

```go
func SecretScanningInput() RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `SecretScanningPushProtectionInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput"></a>

```go
func SecretScanningPushProtectionInput() RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositorySecurityAndAnalysis
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---


### RepositorySecurityAndAnalysisSecretScanningOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositorySecurityAndAnalysisSecretScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositorySecurityAndAnalysisSecretScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositorySecurityAndAnalysisSecretScanning
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---


### RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositorySecurityAndAnalysisSecretScanningPushProtection
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---


### RepositoryTemplateOutputReference <a name="RepositoryTemplateOutputReference" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repository"

repository.NewRepositoryTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches">ResetIncludeAllBranches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeAllBranches` <a name="ResetIncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches"></a>

```go
func ResetIncludeAllBranches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput">IncludeAllBranchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches">IncludeAllBranches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeAllBranchesInput`<sup>Optional</sup> <a name="IncludeAllBranchesInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput"></a>

```go
func IncludeAllBranchesInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `IncludeAllBranches`<sup>Required</sup> <a name="IncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches"></a>

```go
func IncludeAllBranches() interface{}
```

- *Type:* interface{}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryTemplate
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---



