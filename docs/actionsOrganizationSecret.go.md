# `actionsOrganizationSecret` Submodule <a name="`actionsOrganizationSecret` Submodule" id="@cdktf/provider-github.actionsOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationSecret <a name="ActionsOrganizationSecret" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret github_actions_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsorganizationsecret"

actionsorganizationsecret.NewActionsOrganizationSecret(scope Construct, id *string, config ActionsOrganizationSecretConfig) ActionsOrganizationSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig">ActionsOrganizationSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig">ActionsOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue"></a>

```go
func ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue"></a>

```go
func ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds"></a>

```go
func ResetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsorganizationsecret"

actionsorganizationsecret.ActionsOrganizationSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsorganizationsecret"

actionsorganizationsecret.ActionsOrganizationSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsorganizationsecret"

actionsorganizationsecret.ActionsOrganizationSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput"></a>

```go
func EncryptedValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput"></a>

```go
func PlaintextValueInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```go
func SelectedRepositoryIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue"></a>

```go
func EncryptedValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue"></a>

```go
func PlaintextValue() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds"></a>

```go
func SelectedRepositoryIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationSecretConfig <a name="ActionsOrganizationSecretConfig" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsorganizationsecret"

&actionsorganizationsecret.ActionsOrganizationSecretConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretName: *string,
	Visibility: *string,
	EncryptedValue: *string,
	Id: *string,
	PlaintextValue: *string,
	SelectedRepositoryIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#id ActionsOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | An array of repository ids that can access the organization secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#secret_name ActionsOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private', or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#visibility ActionsOrganizationSecret#visibility}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue"></a>

```go
EncryptedValue *string
```

- *Type:* *string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#encrypted_value ActionsOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#id ActionsOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue"></a>

```go
PlaintextValue *string
```

- *Type:* *string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#plaintext_value ActionsOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```go
SelectedRepositoryIds *[]*f64
```

- *Type:* *[]*f64

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_organization_secret#selected_repository_ids ActionsOrganizationSecret#selected_repository_ids}

---



