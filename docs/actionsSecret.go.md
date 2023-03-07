# `actionsSecret` Submodule <a name="`actionsSecret` Submodule" id="@cdktf/provider-github.actionsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsSecret <a name="ActionsSecret" id="@cdktf/provider-github.actionsSecret.ActionsSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_secret github_actions_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionssecret"

actionssecret.NewActionsSecret(scope Construct, id *string, config ActionsSecretConfig) ActionsSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig">ActionsSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsSecret.ActionsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig">ActionsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsSecret.ActionsSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsSecret.ActionsSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsSecret.ActionsSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsSecret.ActionsSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsSecret.ActionsSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsSecret.ActionsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsSecret.ActionsSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsSecret.ActionsSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsSecret.ActionsSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsSecret.ActionsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.actionsSecret.ActionsSecret.resetEncryptedValue"></a>

```go
func ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsSecret.ActionsSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.actionsSecret.ActionsSecret.resetPlaintextValue"></a>

```go
func ResetPlaintextValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionssecret"

actionssecret.ActionsSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionssecret"

actionssecret.ActionsSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionssecret"

actionssecret.ActionsSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsSecret.ActionsSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.encryptedValueInput"></a>

```go
func EncryptedValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.plaintextValueInput"></a>

```go
func PlaintextValueInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.encryptedValue"></a>

```go
func EncryptedValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.plaintextValue"></a>

```go
func PlaintextValue() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsSecret.ActionsSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsSecretConfig <a name="ActionsSecretConfig" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionssecret"

&actionssecret.ActionsSecretConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	SecretName: *string,
	EncryptedValue: *string,
	Id: *string,
	PlaintextValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.repository">Repository</a></code> | <code>*string</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#id ActionsSecret#id}. |
| <code><a href="#@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | Plaintext value of the secret to be encrypted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#repository ActionsSecret#repository}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#secret_name ActionsSecret#secret_name}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.encryptedValue"></a>

```go
EncryptedValue *string
```

- *Type:* *string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#encrypted_value ActionsSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#id ActionsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsSecret.ActionsSecretConfig.property.plaintextValue"></a>

```go
PlaintextValue *string
```

- *Type:* *string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#plaintext_value ActionsSecret#plaintext_value}

---



