# `projectCard` Submodule <a name="`projectCard` Submodule" id="@cdktf/provider-github.projectCard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCard <a name="ProjectCard" id="@cdktf/provider-github.projectCard.ProjectCard"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/project_card github_project_card}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/projectcard"

projectcard.NewProjectCard(scope Construct, id *string, config ProjectCardConfig) ProjectCard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig">ProjectCardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.projectCard.ProjectCardConfig">ProjectCardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetContentId">ResetContentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetNote">ResetNote</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.projectCard.ProjectCard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.projectCard.ProjectCard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.projectCard.ProjectCard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.projectCard.ProjectCard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContentId` <a name="ResetContentId" id="@cdktf/provider-github.projectCard.ProjectCard.resetContentId"></a>

```go
func ResetContentId()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-github.projectCard.ProjectCard.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.projectCard.ProjectCard.resetId"></a>

```go
func ResetId()
```

##### `ResetNote` <a name="ResetNote" id="@cdktf/provider-github.projectCard.ProjectCard.resetNote"></a>

```go
func ResetNote()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.projectCard.ProjectCard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/projectcard"

projectcard.ProjectCard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/projectcard"

projectcard.ProjectCard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/projectcard"

projectcard.ProjectCard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.cardId">CardId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.columnIdInput">ColumnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentIdInput">ContentIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.noteInput">NoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.columnId">ColumnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentId">ContentId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.note">Note</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.projectCard.ProjectCard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.projectCard.ProjectCard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.projectCard.ProjectCard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.projectCard.ProjectCard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.projectCard.ProjectCard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.projectCard.ProjectCard.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.projectCard.ProjectCard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.projectCard.ProjectCard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.projectCard.ProjectCard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.projectCard.ProjectCard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.projectCard.ProjectCard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CardId`<sup>Required</sup> <a name="CardId" id="@cdktf/provider-github.projectCard.ProjectCard.property.cardId"></a>

```go
func CardId() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.projectCard.ProjectCard.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ColumnIdInput`<sup>Optional</sup> <a name="ColumnIdInput" id="@cdktf/provider-github.projectCard.ProjectCard.property.columnIdInput"></a>

```go
func ColumnIdInput() *string
```

- *Type:* *string

---

##### `ContentIdInput`<sup>Optional</sup> <a name="ContentIdInput" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentIdInput"></a>

```go
func ContentIdInput() *f64
```

- *Type:* *f64

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.projectCard.ProjectCard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktf/provider-github.projectCard.ProjectCard.property.noteInput"></a>

```go
func NoteInput() *string
```

- *Type:* *string

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-github.projectCard.ProjectCard.property.columnId"></a>

```go
func ColumnId() *string
```

- *Type:* *string

---

##### `ContentId`<sup>Required</sup> <a name="ContentId" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentId"></a>

```go
func ContentId() *f64
```

- *Type:* *f64

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.projectCard.ProjectCard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-github.projectCard.ProjectCard.property.note"></a>

```go
func Note() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.projectCard.ProjectCard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCardConfig <a name="ProjectCardConfig" id="@cdktf/provider-github.projectCard.ProjectCardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.projectCard.ProjectCardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/projectcard"

&projectcard.ProjectCardConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ColumnId: *string,
	ContentId: *f64,
	ContentType: *string,
	Id: *string,
	Note: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.columnId">ColumnId</a></code> | <code>*string</code> | The ID of the project column. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentId">ContentId</a></code> | <code>*f64</code> | 'github_issue.issue_id'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Must be either 'Issue' or 'PullRequest'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.note">Note</a></code> | <code>*string</code> | The note contents of the card. Markdown supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.columnId"></a>

```go
ColumnId *string
```

- *Type:* *string

The ID of the project column.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#column_id ProjectCard#column_id}

---

##### `ContentId`<sup>Optional</sup> <a name="ContentId" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentId"></a>

```go
ContentId *f64
```

- *Type:* *f64

'github_issue.issue_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_id ProjectCard#content_id}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Must be either 'Issue' or 'PullRequest'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_type ProjectCard#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Note`<sup>Optional</sup> <a name="Note" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.note"></a>

```go
Note *string
```

- *Type:* *string

The note contents of the card. Markdown supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#note ProjectCard#note}

---



