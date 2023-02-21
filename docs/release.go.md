# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-github.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-github.release.Release"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/release github_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.release.Release.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/release"

release.NewRelease(scope Construct, id *string, config ReleaseConfig) Release
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.release.ReleaseConfig">ReleaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.release.Release.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.release.Release.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.release.Release.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.release.ReleaseConfig">ReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.release.Release.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.release.Release.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.release.Release.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDiscussionCategoryName">ResetDiscussionCategoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDraft">ResetDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetGenerateReleaseNotes">ResetGenerateReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetPrerelease">ResetPrerelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetTargetCommitish">ResetTargetCommitish</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.release.Release.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.release.Release.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.release.Release.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.release.Release.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.release.Release.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.release.Release.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.release.Release.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.release.Release.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.release.Release.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.release.Release.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.release.Release.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-github.release.Release.resetBody"></a>

```go
func ResetBody()
```

##### `ResetDiscussionCategoryName` <a name="ResetDiscussionCategoryName" id="@cdktf/provider-github.release.Release.resetDiscussionCategoryName"></a>

```go
func ResetDiscussionCategoryName()
```

##### `ResetDraft` <a name="ResetDraft" id="@cdktf/provider-github.release.Release.resetDraft"></a>

```go
func ResetDraft()
```

##### `ResetGenerateReleaseNotes` <a name="ResetGenerateReleaseNotes" id="@cdktf/provider-github.release.Release.resetGenerateReleaseNotes"></a>

```go
func ResetGenerateReleaseNotes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.release.Release.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.release.Release.resetName"></a>

```go
func ResetName()
```

##### `ResetPrerelease` <a name="ResetPrerelease" id="@cdktf/provider-github.release.Release.resetPrerelease"></a>

```go
func ResetPrerelease()
```

##### `ResetTargetCommitish` <a name="ResetTargetCommitish" id="@cdktf/provider-github.release.Release.resetTargetCommitish"></a>

```go
func ResetTargetCommitish()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.release.Release.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/release"

release.Release_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.release.Release.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/release"

release.Release_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.release.Release.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/release"

release.Release_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.release.Release.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryNameInput">DiscussionCategoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draftInput">DraftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotesInput">GenerateReleaseNotesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prereleaseInput">PrereleaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagNameInput">TagNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitishInput">TargetCommitishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryName">DiscussionCategoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draft">Draft</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotes">GenerateReleaseNotes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prerelease">Prerelease</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitish">TargetCommitish</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.release.Release.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.release.Release.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.release.Release.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.release.Release.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.release.Release.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.release.Release.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.release.Release.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.release.Release.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.release.Release.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.release.Release.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.release.Release.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.release.Release.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.release.Release.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.release.Release.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-github.release.Release.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `DiscussionCategoryNameInput`<sup>Optional</sup> <a name="DiscussionCategoryNameInput" id="@cdktf/provider-github.release.Release.property.discussionCategoryNameInput"></a>

```go
func DiscussionCategoryNameInput() *string
```

- *Type:* *string

---

##### `DraftInput`<sup>Optional</sup> <a name="DraftInput" id="@cdktf/provider-github.release.Release.property.draftInput"></a>

```go
func DraftInput() interface{}
```

- *Type:* interface{}

---

##### `GenerateReleaseNotesInput`<sup>Optional</sup> <a name="GenerateReleaseNotesInput" id="@cdktf/provider-github.release.Release.property.generateReleaseNotesInput"></a>

```go
func GenerateReleaseNotesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.release.Release.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.release.Release.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrereleaseInput`<sup>Optional</sup> <a name="PrereleaseInput" id="@cdktf/provider-github.release.Release.property.prereleaseInput"></a>

```go
func PrereleaseInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.release.Release.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-github.release.Release.property.tagNameInput"></a>

```go
func TagNameInput() *string
```

- *Type:* *string

---

##### `TargetCommitishInput`<sup>Optional</sup> <a name="TargetCommitishInput" id="@cdktf/provider-github.release.Release.property.targetCommitishInput"></a>

```go
func TargetCommitishInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-github.release.Release.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `DiscussionCategoryName`<sup>Required</sup> <a name="DiscussionCategoryName" id="@cdktf/provider-github.release.Release.property.discussionCategoryName"></a>

```go
func DiscussionCategoryName() *string
```

- *Type:* *string

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktf/provider-github.release.Release.property.draft"></a>

```go
func Draft() interface{}
```

- *Type:* interface{}

---

##### `GenerateReleaseNotes`<sup>Required</sup> <a name="GenerateReleaseNotes" id="@cdktf/provider-github.release.Release.property.generateReleaseNotes"></a>

```go
func GenerateReleaseNotes() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.release.Release.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.release.Release.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prerelease`<sup>Required</sup> <a name="Prerelease" id="@cdktf/provider-github.release.Release.property.prerelease"></a>

```go
func Prerelease() interface{}
```

- *Type:* interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.release.Release.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-github.release.Release.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `TargetCommitish`<sup>Required</sup> <a name="TargetCommitish" id="@cdktf/provider-github.release.Release.property.targetCommitish"></a>

```go
func TargetCommitish() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.release.Release.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-github.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.release.ReleaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/release"

&release.ReleaseConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	TagName: *string,
	Body: *string,
	DiscussionCategoryName: *string,
	Draft: interface{},
	GenerateReleaseNotes: interface{},
	Id: *string,
	Name: *string,
	Prerelease: interface{},
	TargetCommitish: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.repository">Repository</a></code> | <code>*string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.tagName">TagName</a></code> | <code>*string</code> | The name of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.body">Body</a></code> | <code>*string</code> | Text describing the contents of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName">DiscussionCategoryName</a></code> | <code>*string</code> | If specified, a discussion of the specified category is created and linked to the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.draft">Draft</a></code> | <code>interface{}</code> | Set to 'false' to create a published release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes">GenerateReleaseNotes</a></code> | <code>interface{}</code> | Set to 'true' to automatically generate the name and body for this release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#id Release#id}. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.name">Name</a></code> | <code>*string</code> | The name of the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.prerelease">Prerelease</a></code> | <code>interface{}</code> | Set to 'false' to identify the release as a full release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish">TargetCommitish</a></code> | <code>*string</code> | The branch name or commit SHA the tag is created from. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.release.ReleaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.release.ReleaseConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.release.ReleaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.release.ReleaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.release.ReleaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.release.ReleaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.release.ReleaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.release.ReleaseConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#repository Release#repository}

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-github.release.ReleaseConfig.property.tagName"></a>

```go
TagName *string
```

- *Type:* *string

The name of the tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#tag_name Release#tag_name}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-github.release.ReleaseConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Text describing the contents of the tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#body Release#body}

---

##### `DiscussionCategoryName`<sup>Optional</sup> <a name="DiscussionCategoryName" id="@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName"></a>

```go
DiscussionCategoryName *string
```

- *Type:* *string

If specified, a discussion of the specified category is created and linked to the release.

The value must be a category that already exists in the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#discussion_category_name Release#discussion_category_name}

---

##### `Draft`<sup>Optional</sup> <a name="Draft" id="@cdktf/provider-github.release.ReleaseConfig.property.draft"></a>

```go
Draft interface{}
```

- *Type:* interface{}

Set to 'false' to create a published release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#draft Release#draft}

---

##### `GenerateReleaseNotes`<sup>Optional</sup> <a name="GenerateReleaseNotes" id="@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes"></a>

```go
GenerateReleaseNotes interface{}
```

- *Type:* interface{}

Set to 'true' to automatically generate the name and body for this release.

If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#generate_release_notes Release#generate_release_notes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.release.ReleaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.release.ReleaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#name Release#name}

---

##### `Prerelease`<sup>Optional</sup> <a name="Prerelease" id="@cdktf/provider-github.release.ReleaseConfig.property.prerelease"></a>

```go
Prerelease interface{}
```

- *Type:* interface{}

Set to 'false' to identify the release as a full release.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#prerelease Release#prerelease}

---

##### `TargetCommitish`<sup>Optional</sup> <a name="TargetCommitish" id="@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish"></a>

```go
TargetCommitish *string
```

- *Type:* *string

The branch name or commit SHA the tag is created from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/release#target_commitish Release#target_commitish}

---



